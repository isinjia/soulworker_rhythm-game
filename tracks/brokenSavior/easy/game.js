// game.js

// ── 게임 설정 상수 ──


const NOTE_SPAWN_DELAY = 0; // 노트 딜레이 초

const fps = 60;              // 프레임
const baseNoteSpeed = 3;     // 기본 속도 (픽셀/프레임)
let speedMultiplier = baseNoteSpeed * (window.speedMultiplier ?? 3);

console.log('[DEBUG] Loaded speedMultiplier =', speedMultiplier);

const BASE_PERFECT_WINDOW = 15;  // 기본 PERFECT 허용 거리 (px)
const BASE_GOOD_WINDOW    = 30;  // 기본 GOOD 허용 거리 (px)
const BASE_BAD_WINDOW     = 60;  // 기본 BAD 허용 거리 (px)
const MISS_WINDOW         = 61;
const BODY_PERFECT_DIFF = 15;  // 기본 15px  


function getNoteSpeed() {
  return baseNoteSpeed * speedMultiplier;
}
function getPixelsPerSecond() {
  return getNoteSpeed() * fps;
}

// ── travelTime 계산도 동적으로 ──
// const travelTime = travelDistance / getPixelsPerSecond();
// ↓↓
// draw()나 스폰 직전마다:




// ── 캔버스 설정 ──
const canvas = document.getElementById('gameCanvas');
canvas.style.display = 'block'; canvas.style.marginLeft = '100px';
const ctx = canvas.getContext('2d');

const gameWidth = 500, extraWidth = 50;
canvas.width = gameWidth + extraWidth;
canvas.height = 900;

const judgementLineY = canvas.height - 150;
const laneUnit = gameWidth / 9;
const laneWidths = [1,1,1,3,1,1,1];
const lanePositions = [];
let currentX = 0;
for (let i = 0; i < laneWidths.length; i++) {
  lanePositions.push(currentX + laneWidths[i] * laneUnit / 2);
  currentX += laneWidths[i] * laneUnit;
}

const tapHeight = 10;
const travelDistance = judgementLineY - (-tapHeight);
const travelTime     = travelDistance / (baseNoteSpeed * fps);


let autoPlay = false;  // ← 기본값은 true로 시작 (테스트용)

// ── 게임 데이터 ──
// notes 배열은 noteData.js에서 가져옴
const noteColors = ['white','blue','white','yellow','white','blue','white'];
let activeNotes = [], upcomingNotes = [...notes], combo = 0, score = 0, judgeTexts = [], gauge = 100;
const pressedLanes = [false, false, false, false, false, false, false];

let comboAnimStart = 0;  // 콤보가 갱신될 때마다 이 시간에 맞춰 바운스 시작

// ── 레인 플래시 상태 ──
const flashLanes  = [0,0,0,0,0,0,0];
const flashColors = [
  '#00ff00', // 레인 0: 초록
  '#0000ff', // 레인 1: 파랑
  '#00ff00', // 레인 2: 초록
  '#ffffff', // 레인 3: 흰
  '#00ff00', // 레인 4: 초록
  '#0000ff', // 레인 5: 파랑
  '#00ff00'  // 레인 6: 초록
];
// flashLanes[i] 값(0→1)으로 페이드 아웃

const audio = new Audio('assets/bgm/brokenSavior.mp3'); audio.volume = 0.5; let audioStarted = false;
const keyToLane = {'KeyS':0,'KeyD':1,'KeyF':2,'Space':3,'KeyJ':4,'KeyK':5,'KeyL':6};


const bgVideo   = document.getElementById('bgVideo');
let   bgStarted = false;


// 롱노트 상태 관리 함수
function getActiveHoldNote(lane) {
    // 1) 먼저 판정된 헤드 노트를 찾는다
    const head = activeNotes.find(n =>
            n.type === 'hold_head' &&
            n.lane === lane &&
            !n.missed
          );
    if (!head) return null;
  
    // 2) 판정 시점부터 duration 초가 지나지 않은 '바디 구간'만 유효
    const elapsed = audio.currentTime - head.headJudgeTime;
    if (elapsed < head.duration) {
      return head;
    }
    // duration이 지나면 자동으로 롱노트 상태 해제
    return null;
  }
// keydown 이벤트 핸들러 수정
document.addEventListener('keydown', e => {





  // (①) 배경 영상은 키 입력 첫 타이밍에 재생 시작
  if (!bgStarted) { bgVideo.play().catch(()=>{}); bgStarted = true; }
  // (②) BGM은 기존대로
  if (!audioStarted) {
        audio.play().catch(()=>{});
        audioStarted = true;
        // ↓ Audio 시작 시점 로그
        //console.log(
        //  `[DEBUG] Audio started at audio.currentTime=${audio.currentTime.toFixed(3)}s`
        //);
      }
      e.preventDefault();  // Space 등 기본 스크롤 방지

      const lane = keyToLane[e.code];
      if (lane === undefined) return;
    
      // 1) 눌린 키 상태를 제일 먼저 갱신
      pressedLanes[lane] = true;
    
      // 2) 실제 롱노트 바디(Head 판정 완료 후 duration 안) 구간인지 확인
      const holdBodyActive = activeNotes.some(n =>
        n.type === 'hold_head' &&
        n.lane === lane &&
        n.headJudged &&                                      // 헤드가 이미 판정된 뒤
        !n.missed &&
        (audio.currentTime - n.headJudgeTime) < n.duration   // duration 구간일 때만
      );
    
      // 3) 그 구간이 아닐 때만 탭 판정 시도
      if (!holdBodyActive) {
        hitNote(lane);
      }
    });

// keyup 이벤트 핸들러 수정
document.addEventListener('keyup', e => {
  const lane = keyToLane[e.code];
  if (lane === undefined) return;
  pressedLanes[lane] = false;
});

// 롱노트 판정 함수
function judgeHoldNotes() {
  for (let i = activeNotes.length - 1; i >= 0; i--) {
    const n = activeNotes[i];
    //console.log(`[DEBUG] judgeHoldNotes: checking n.type=${n.type} lane=${n.lane} y=${n.y.toFixed(1)}`);
  
    // ── ① 헤드 판정 로직 ──
    if (n.type === 'hold_head') {

      if (!n.headJudged) {
                //console.log(`  → headJudged=false, y=${n.y.toFixed(1)}, pressed=${pressedLanes[n.lane]}`);
              }
               // 기존 헤드 성공/실패 로직…
              //if (n.missed) {
                //console.log(`  ✘ HEAD MISS: lane=${n.lane} y=${n.y.toFixed(1)}`);}

      // ── 같은 레인에서 '이미 판정된 헤드'가 있고 바디가 끝나지 않았다면
      const ongoing = activeNotes.some(m =>
                m !== n &&
                m.type === 'hold_head' &&
                m.lane === n.lane &&
                m.headJudged &&
                !m.missed &&
                // 실제 바디가 아직 진행 중인지 체크
                (audio.currentTime - m.headJudgeTime) < m.duration
              );
        if (ongoing) {
          continue;  // 진행 중인 롱노트 바디가 끝날 때까지 이 노트의 헤드는 무시
        }



      // 아직 헤드 판정 전이라면
      if (!n.headJudged) {
        // ✅ 성공 판정: 판정창 범위 안에서 키가 눌렸을 때
        if (pressedLanes[n.lane]) {
                    const diff = Math.abs(n.y - judgementLineY);
                    // 동적 판정 윈도우 계산 (배속 반영)
                    const perfectWindow = BASE_PERFECT_WINDOW * speedMultiplier;
                    const goodWindow    = BASE_GOOD_WINDOW    * speedMultiplier;
                    const badWindow     = BASE_BAD_WINDOW     * speedMultiplier;
                    if (diff <= badWindow) {
                      //console.log('[LOG] HEAD 판정 시도 & 판정 통과:', diff.toFixed(1), badWindow.toFixed(1));
                      // 1) 판정 분기
                      let txt, pts, delta;
                      if (diff <= perfectWindow) {
                        txt   = 'PERFECT'; pts = 300; delta = 2;
                        combo++; comboAnimStart = Date.now();
                      }
                      else if (diff <= goodWindow) {
                        txt   = 'GOOD';    pts = 200; delta = 1;
                        combo++; comboAnimStart = Date.now();
                      }
                      else {
                        txt   = 'BAD';     pts = 50;  delta = -3;
                        combo = 0;
                      }
          
                 // 2) 상태 업데이트
                 n.headJudged    = true;
                 n.headJudgeTime = audio.currentTime;
                 judgeTexts      = [{ text: txt, time: Date.now() }];
                 score          += pts;
                 gauge           = Math.max(0, Math.min(100, gauge + delta));
                 spawnHitEffect(lanePositions[n.lane], judgementLineY, n.lane);
                 //console.log(`[롱노트] HEAD 판정 ${txt}: lane=${n.lane}, diff=${diff.toFixed(1)}`);
               }
             }
        
        
             else if (n.y > judgementLineY + (BASE_BAD_WINDOW * speedMultiplier)) {
          n.missed = true;
          //console.log(`[롱노트] HEAD 판정 실패: lane=${n.lane}`);  // :contentReference[oaicite:2]{index=2}:contentReference[oaicite:3]{index=3}
          judgeTexts = [{ text: 'MISS', time: Date.now() }];
          combo = 0; gauge = Math.max(0, gauge - 10);
        }
      }
    

          // ── 바디 구간: 헤드가 판정된 이후 duration 동안 키 유지 체크 ──
          if (n.headJudged && !n.missed) {
            const elapsed = audio.currentTime - n.headJudgeTime;
            //console.log(`  → BODY check: elapsed=${elapsed.toFixed(2)}/${n.duration.toFixed(2)} pressed=${pressedLanes[n.lane]}`);
            if (!pressedLanes[n.lane] && elapsed < n.duration) {
                      //console.log(`    ✘ BODY MISS at elapsed=${elapsed.toFixed(2)}`);
                    }
            // 꼬리 등장 전까지(=duration 초)만 체크
            if (elapsed < n.duration) {
              // 판정선 위에서 키가 떼어지면 즉시 MISS
              

              // 꼬리가 판정선에 닿기 전에 키를 떼면
       const headY = n.y;
       const tailY = n.y - n.duration * getPixelsPerSecond();
       if (tailY <= judgementLineY && headY >= judgementLineY && !pressedLanes[n.lane]) {
         const diff = Math.abs(tailY - judgementLineY);
         const diffWindow = BODY_PERFECT_DIFF * speedMultiplier;
         if (diff < diffWindow) {
           // 1) EARLY RELEASE PERFECT 처리
           judgeTexts = [{ text: 'PERFECT', time: Date.now() }];
           score  += 300;
           gauge   = Math.min(100, gauge + 2);
           combo++;
           comboAnimStart = Date.now();
           spawnHitEffect(lanePositions[n.lane], judgementLineY, n.lane);
           //console.log(`[롱노트] EARLY BODY PERFECT: lane=${n.lane}, diff=${diff.toFixed(1)}`);

           // 2) 남은 롱노트(헤드+꼬리) 제거
           
           activeNotes.splice(i--, 1);
           const tailIdx = activeNotes.findIndex(m => m.lane === n.lane);
           if (tailIdx >= 0) activeNotes.splice(tailIdx, 1);
         } else {
           // 기존 MISS 처리
           n.missed = true;
           judgeTexts = [{ text: 'MISS', time: Date.now() }];
           combo = 0;
           gauge = Math.max(0, gauge - 10);
           //console.log(`[롱노트] BODY MISS: lane=${n.lane}, diff=${diff.toFixed(1)}`);
         }
       }



            }
          }
      
      



    } 
    //if ((n.type === 'hold_head' && n.missed) ) {
    //        console.log(`  → Removing note: type=${n.type} lane=${n.lane}`);}

    // ── ② 헤드 MISS 시 꼬리 제거 로직 ──


  

  
  }
}

// 노트 스폰 로직 수정
function spawnNote(next) {

  

  const spawnY = -tapHeight;
  //console.log(`[DEBUG] spawnNote: HOLD_HEAD lane=${next.lane} duration=${next.duration}s spawnY=${spawnY}`);

  if (next.type === 'hold') {

    // 1) headNote 생성 및 tail 스폰 타이머 ID 저장
    const headNote = {
      lane: next.lane,
      y: spawnY,
      type: 'hold_head',
      hitTime: next.time,           // ← noteData 상의 도착 예상 시각
      hasLoggedArrival: false,      // ← 한 번만 로그 찍기용
      completed: false,
      missed: false,
      duration: next.duration || 0,
      headJudged: false,
      headJudgeTime: 0,
      
      bodyPerfected: false


    };
    
   

    // 3) activeNotes에 headNote 추가
    activeNotes.push(headNote);

    //console.log(`[롱노트 생성] lane=${next.lane}, duration=${next.duration}, headY=${spawnY}`);
  } else {
    
    // 일반 탭 노트
    activeNotes.push({
      lane: next.lane,
      y: spawnY,
      type: 'tap',
      hitTime: next.time,           // ← tap 노트도 마찬가지로
      hasLoggedArrival: false,      // ← arrival 로그용
      completed: false,
      missed: false
    });
  }
}

let lastTime = performance.now();

// ── 레인별 이미지 설정 ──
// scale: 이미지 크기 배율  
// offsetX: 레인 중앙 기준으로 좌우 이동량(px)  
// offsetY: 판정선 기준 상하 이동량(px)  
// z: 그릴 순서 (작을수록 뒤, 클수록 앞으로)
const laneConfig = [
  { scale: 0.37,   offsetX: 14, offsetY: 10, z: 1 },  // S
  { scale: 0.37, offsetX: 1, offsetY: 10,  z: 2 },  // D
  { scale: 0.37,   offsetX: -14, offsetY: 10, z: 1 },  // F
  { scale: 0.37,   offsetX: 0, offsetY: 10, z: 0 },  // Space
  { scale: 0.37,   offsetX: 14, offsetY: 10, z: 1 },  // J
  { scale: 0.37, offsetX: 1, offsetY: 10,  z: 2 },  // K
  { scale: 0.37,   offsetX: -14, offsetY: 10, z: 1 },  // L
];

// 모든 키 이미지를 이 높이로 통일합니다 (예: 80px)
const keyImageHeight = 80;

// ── 8×8 도트 매트릭스 글꼴 정의 ──
const dotFont = {
  'A': ["00111100","01000010","10000001","10000001","11111111","10000001","10000001","10000001"],
  'B': ["11111110","10000001","10000001","11111110","10000001","10000001","10000001","11111110"],
  'C': ["01111110","10000001","10000000","10000000","10000000","10000000","10000001","01111110"],
  'D': ["11111100","10000010","10000001","10000001","10000001","10000001","10000010","11111100"],
  'E': ["11111111","10000000","10000000","11111110","10000000","10000000","10000000","11111111"],
  'F': ["11111111","10000000","10000000","11111110","10000000","10000000","10000000","10000000"],
  'G': ["01111110","10000000","10000000","10001111","10000001","10000001","10000001","01111110"],
  'I': [
    "00111100",
    "00011000",
    "00011000",
    "00011000",
    "00011000",
    "00011000",
    "00011000",
    "00111100"
  ],
  'L': ["10000000","10000000","10000000","10000000","10000000","10000000","10000000","11111111"],
  'M': ["10000001","11000011","10100101","10011001","10000001","10000001","10000001","10000001"],
  'O': ["01111110","10000001","10000001","10000001","10000001","10000001","10000001","01111110"],
  'P': ["11111110","10000001","10000001","11111110","10000000","10000000","10000000","10000000"],
  'R': ["11111110","10000001","10000001","11111110","10100000","10010000","10001000","10000100"],
  'S': ["01111110","10000001","10000000","01111110","00000001","00000001","10000001","01111110"],
  'T': ["11111111","00011000","00011000","00011000","00011000","00011000","00011000","00011000"],
  'U': ["10000001","10000001","10000001","10000001","10000001","10000001","10000001","01111110"],
  '0': ["01111110","10000001","10000011","10000101","10001001","10010001","10100001","01111110"],
  '1': ["00111000","00011000","00011000","00011000","00011000","00011000","00011000","00011000"],
  '2': ["01111110","10000001","00000001","00000110","00011000","00100000","01000000","11111111"],
  '3': ["01111110","10000001","00000001","00111110","00000001","00000001","10000001","01111110"],
  '4': ["00000110","00001110","00010110","00100110","01000110","11111111","00000110","00000110"],
  '5': ["11111111","10000000","10000000","11111110","00000001","00000001","10000001","01111110"],
  '6': ["00111110","01000000","10000000","11111110","10000001","10000001","10000001","01111110"],
  '7': ["11111111","10000001","00000010","00000100","00001000","00010000","00100000","00100000"],
  '8': ["01111110","10000001","10000001","01111110","10000001","10000001","10000001","01111110"],
  '9': ["01111110","10000001","10000001","01111111","00000001","00000001","00000001","01111110"],
  ' ': ["00000000","00000000","00000000","00000000","00000000","00000000","00000000","00000000"],
  '!': ["00110000","00110000","00110000","00110000","00110000","00000000","00110000","00110000"]
};

// ── 레인별 이미지 로드 ──
// assets/ 폴더에 S.png, D.png, F.png, Space.png, J.png, K.png, L.png 준비
const laneImagePaths = [
  'assets/S.png',
  'assets/D.png',
  'assets/F.png',
  'assets/Space.png',
  'assets/J.png',
  'assets/K.png',
  'assets/L.png'
];
const laneImages = laneImagePaths.map(path => {
  const img = new Image();
  img.src = path;
  return img;
});

const hpImage = new Image();
hpImage.src = 'assets/hp_fill.png';

// 판정 허용 거리(픽셀)
const JUDGE_WINDOW = 60;

function hitNote(lane) {


  //console.log(
   //     `[DEBUG] hitNote() called lane=${lane}` +
   //     ` pressed=${pressedLanes[lane]}` +
   //     ` activeNotes=[${activeNotes.map(n=>`${n.type}@${n.lane}@y=${n.y.toFixed(1)}`).join(', ')}]`
   //   );

  // 최소 판정 시작 지점: BAD 판정창 밖에서 MISS 방지
  

  for (let i = 0; i < activeNotes.length; i++) {
    const n = activeNotes[i];
    if (n.type !== "tap") continue;

    // ① diff 계산 및 동적 판정창
    const diff           = Math.abs(n.y - judgementLineY);
    const perfectWindow  = BASE_PERFECT_WINDOW * speedMultiplier;
    const goodWindow     = BASE_GOOD_WINDOW    * speedMultiplier;
    const badWindow      = BASE_BAD_WINDOW     * speedMultiplier;

    // ② 판정 분기
    if (n.lane === lane && diff <= badWindow) {
      let txt, pts, delta;
      if (diff <= perfectWindow) {
        txt   = 'PERFECT'; pts = 300; delta = 2;
        combo++; comboAnimStart = Date.now();
      }
      else if (diff <= goodWindow) {
        txt   = 'GOOD';    pts = 200; delta = 1;
        combo++; comboAnimStart = Date.now();
      }
      else {
        txt   = 'BAD';     pts = 50;  delta = -3;
        combo = 0;
      }

      // ③ 결과 반영
      judgeTexts = [{ text: txt, time: Date.now() }];
      score      += pts;
      gauge       = Math.max(0, Math.min(100, gauge + delta));
      spawnHitEffect(lanePositions[lane], judgementLineY, lane);

      // ④ 노트 제거
      activeNotes.splice(i, 1);
      return;
    }
  }

  // ⑤ MISS
  //judgeTexts = [{ text: 'MISS', time: Date.now() }];
  //combo     = 0;
  //gauge     = Math.max(0, gauge - 5);
}


// ── 8×8 도트 매트릭스 텍스트 그리기 ──
function drawDotMatrixText(ctx, text, x, y, options = {}) {
  const { baseDotRadius = 4, dotSpacing = 12, charSpacing = dotSpacing * 2, color = '#00ccff', fadeTo = '#ffffff' } = options;
  const dotRadius = baseDotRadius * 1.2;
  function hexToRgb(h) { const m = h.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i); return m ? [parseInt(m[1],16), parseInt(m[2],16), parseInt(m[3],16)] : [255,255,255]; }
  const [r1, g1, b1] = hexToRgb(color), [r2, g2, b2] = hexToRgb(fadeTo);
  text = text.toUpperCase();
  for (let ci = 0; ci < text.length; ci++) {
    const pattern = dotFont[text[ci]]; if (!pattern) continue;
    for (let row = 0; row < 8; row++) {
      const t = row / 7;
      const r = Math.round(r1 * (1 - t) + r2 * t), g = Math.round(g1 * (1 - t) + g2 * t), b = Math.round(b1 * (1 - t) + b2 * t);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      for (let col = 0; col < 8; col++) {
        if (pattern[row][col] === '1') {
          const dx = x + ci * (8 * dotSpacing + charSpacing) + col * dotSpacing;
          const dy = y + row * dotSpacing;
          ctx.beginPath(); ctx.arc(dx, dy, dotRadius, 0, Math.PI * 2); ctx.fill();
        }
      }
    }
  }
}

// ── 이펙트 관리 ──
const effects = [];

function spawnHitEffect(x, y, lane) {
  // Spacebar(lane===3)일 때만 기본 크기를 2배로
  const scale = (lane === 3 ? 2 : 1);

  // 작은 다이아몬드 (정사각형)
  effects.push({
    type:   'small',
    x, y,
    size:   25 * scale,
    alpha:  0.5,
    life:   0
  });

  // 큰 다이아몬드 (정사각형)
  effects.push({
    type:        'large',
    x, y,
    size:        50 * scale,
    alpha:       0.8,
    strokeAlpha: 0.3,
    life:        0
  });

  // 파티클
  for (let i = 0; i < 4; i++) {
    effects.push({
      type: 'particle',
      x, y,
      vx:   (Math.random() - 0.5) * 2,
      vy:   -Math.random() * 2,
      life:  0,
      size:  4
    });
  }
}

function drawEffects(dt) {
  for (let i = effects.length - 1; i >= 0; i--) {
    const e = effects[i];
    e.life += dt;
    if (e.life > 0.5) {
      effects.splice(i, 1);
      continue;
    }

    const prog = e.life / 0.5;

    if (e.type === 'small' || e.type === 'large') {
      // 정사각형으로만 확대
      const s = e.size * (1 + prog);

      ctx.save();
      ctx.translate(e.x, e.y);
      ctx.rotate(Math.PI / 4);

      if (e.type === 'small') {
        ctx.globalAlpha = e.alpha * (1 - prog);
        ctx.fillStyle   = '#fff';
        ctx.fillRect(-s / 2, -s / 2, s, s);
      } else {
        ctx.globalAlpha = e.alpha * (1 - prog);
        ctx.strokeStyle = `rgba(255,255,255,${e.strokeAlpha * (1 - prog)})`;
        ctx.lineWidth   = 2;
        ctx.strokeRect(-s / 2, -s / 2, s, s);
      }

      ctx.restore();

    } else {  // particle
      e.x += e.vx * dt * 60;
      e.y += e.vy * dt * 60;
      ctx.globalAlpha = 1 - (e.life / 0.5);
      ctx.fillStyle   = '#fff';
      ctx.fillRect(e.x - e.size / 2, e.y - e.size / 2, e.size, e.size);
    }
  }
  ctx.globalAlpha = 1;
}


const HOLD_EFFECT_INTERVAL = 0.2;                                // 0.2초마다
const lastHoldEffectTime   = new Array(lanePositions.length).fill(0);  // 레인별 타임스탬프

function draw() {
  


  const now = performance.now();
  const animNow = Date.now();
  const dt = (now - lastTime) / 1000;


    // ── ① 프레임 시간 계산 ──
  
  lastTime      = now;
  

  // ── 이후 draw() 전반에서 dt, animNow를 사용할 수 있습니다
  const noteHeight = 10;
  const nowSec     = now / 1000;
  

  
  for (let lane = 0; lane < lanePositions.length; lane++) {
    const hold = getActiveHoldNote(lane);
    if (hold && pressedLanes[lane] && nowSec - lastHoldEffectTime[lane] >= HOLD_EFFECT_INTERVAL) {
      spawnHitEffect(lanePositions[lane], judgementLineY, lane);
      lastHoldEffectTime[lane] = nowSec;
    }
  }
 
 

  // 오토모드에서 일반 노트 판정 자동 수행
  if (autoPlay) {
    for (let i = 0; i < activeNotes.length; i++) {
      const n = activeNotes[i];
      if (n.type === "tap") {
        const d = Math.abs(n.y - judgementLineY);
        if (d < 10) { // ✅ PERFECT 조건일 때만
          hitNote(n.lane);
        }
      }
    }
  }

  // 오토 플레이 입력 처리
  if (autoPlay) {
    pressedLanes.fill(false);
  
    for (let i = 0; i < activeNotes.length; i++) {
      const n = activeNotes[i];
      const headY = n.y;
      const tailY = n.y + n.length;
  
      if (n.type === "tap") {
        if (Math.abs(headY - judgementLineY) <= JUDGE_WINDOW) {
          pressedLanes[n.lane] = true;
          hitNote(n.lane);
        }
      } 
    }
  }
  

  lastTime = now;

  // 노트 스폰 로직
  while (upcomingNotes.length) {
    const next = upcomingNotes[0];
    const dynamicTravelTime = travelDistance / getPixelsPerSecond();
    const spawnTime         = next.time - dynamicTravelTime + NOTE_SPAWN_DELAY;


    if (!audioStarted || audio.currentTime < spawnTime) break;
    // ↓ 노트 스폰 시점 로그
   // console.log(
    //  `[DEBUG] spawnNote #${next.type} lane=${next.lane}` +
    //  ` expectedSpawnTime=${spawnTime.toFixed(3)}s` +
    //  ` currentAudioTime=${audio.currentTime.toFixed(3)}s` +
    //  ` delta=${(audio.currentTime - spawnTime).toFixed(3)}s`
    //);
    upcomingNotes.shift();
    spawnNote(next);
  }

  ctx.fillStyle = 'black'; ctx.fillRect(0,0,canvas.width,canvas.height);

    // ── 레인 플래시 그리기 ──

      // ── 레인 그라데이션 (키 누른 동안만) ──
  for (let i = 0; i < laneWidths.length; i++) {
    if (pressedLanes[i]) {
      // 레인 X 위치, 너비 계산
      const x0 = laneWidths.slice(0, i).reduce((sum, w) => sum + w, 0) * laneUnit;
      const w  = laneWidths[i] * laneUnit;

      // 위→아래 그라데이션 (투명도 50%)
      const g = ctx.createLinearGradient(x0, canvas.height, x0, 0);
      const alpha = '80'; // hex 0x80 = 128/255 약 50%
      g.addColorStop(0, flashColors[i] + alpha);
      g.addColorStop(1, flashColors[i] + '00');

      ctx.fillStyle = g;
      ctx.fillRect(x0, 0, w, canvas.height);
    }
  }

    
  


  // 노트 스폰
    // ── 노트 스폰 (tap: 머리 time, hold: 꼬리 time 기준)
  judgeHoldNotes();
  
 



    // ── 4) 업데이트 + 제거만 (렌더링은 다음 단계에서) ──
    for (let i = activeNotes.length - 1; i >= 0; i--) {
      const n = activeNotes[i];
      // ── arrival debug: y가 판정선을 처음 넘어설 때만 찍기 ──
      if (!n.hasLoggedArrival &&
            n.y < judgementLineY &&
            n.y + getNoteSpeed() >= judgementLineY) {
          //console.log(
          //  `[DEBUG] ARRIVAL lane=${n.lane} ` +
          //  `expected=${n.hitTime.toFixed(3)} ` +
          //  `actual=${audio.currentTime.toFixed(3)} ` +
          //  `delta=${(audio.currentTime - n.hitTime).toFixed(3)}`
          //);
          n.hasLoggedArrival = true;
        }

      // ── 0) 바디 구간 완료 시 자동 PERFECT 부여 ──
      if (n.type === 'hold_head'
                && n.headJudged
                && !n.missed
                && !n.bodyPerfected) {
            const elapsed = audio.currentTime - n.headJudgeTime;
            if (elapsed >= n.duration) {
              // 1) 자동 완료 상태 처리
              n.bodyPerfected = true;
              // 2) 점수·콤보·이펙트
              judgeTexts = [{ text: 'PERFECT', time: Date.now() }];
              score  += 300;
              gauge   = Math.min(100, gauge + 2);
              combo++;
              comboAnimStart = Date.now();
              spawnHitEffect(lanePositions[n.lane], judgementLineY, n.lane);
              //console.log(`[롱노트] BODY 완료 자동 PERFECT: lane=${n.lane}, elapsed=${elapsed.toFixed(2)}`);
        
              
        
              // 4) head 제거
              activeNotes.splice(i, 1);
              continue;
            }
          }




      // 1) 위치 업데이트
      n.y += getNoteSpeed();
  
      // 2) 롱노트 판정 및 MISS 처리
      if (n.type === 'hold_head') {
        // 머리 판정 실패
        if (!n.headJudged && n.y > judgementLineY + JUDGE_WINDOW) {
          n.missed = true;
          judgeTexts = [{ text: 'MISS', time: Date.now() }];
          combo = 0; gauge = Math.max(0, gauge - 10);
        }
      }  else {
        // 탭 노트 MISS 처리
        const badWindow = BASE_BAD_WINDOW * speedMultiplier;
        if (n.y > judgementLineY + badWindow) {
          judgeTexts = [{ text: 'MISS', time: Date.now() }];
          combo = 0; gauge = Math.max(0, gauge - 5);
          activeNotes.splice(i, 1);
        }
      }
  
      // 3) completed 또는 missed 상태인 노트 제거
      if (n.completed || n.missed) {
        activeNotes.splice(i, 1);
        continue;
      }
    }
  
    // ── 5) 렌더링: 1) 롱노트 몸통만 먼저 ──
    activeNotes.forEach(n => {
      const x = lanePositions[n.lane];
      const w = laneWidths[n.lane] * laneUnit * 0.8;
      
      if (n.type === 'hold_head') {
        // 바디 그리기 (파란색) - 헤드 위로
        const bodyLength = n.duration * getPixelsPerSecond();
        ctx.fillStyle = '#88f';
        ctx.fillRect(x - w/2, n.y - bodyLength, w, bodyLength);

        // 헤드 노트 (흰색)
        ctx.fillStyle = '#fff';
        ctx.fillRect(x - w/2, n.y, w, tapHeight);

        // 디버그 로그
        //console.log(`[롱노트 렌더링] lane=${n.lane}, headY=${n.y.toFixed(2)}, bodyLength=${bodyLength.toFixed(2)}, duration=${n.duration}, headJudged=${n.headJudged}, missed=${n.missed}`);
      } 
    });
  
    // ── 6) 렌더링: 2) 머리·꼬리·탭 노트 ──
    activeNotes.forEach(n => {
      const x = lanePositions[n.lane];
      const w = laneWidths[n.lane] * laneUnit * 0.8;
  
      if (n.type === 'hold_head') {
        // 머리
        ctx.fillStyle = '#fff';
        ctx.fillRect(x - w/2, n.y, w, tapHeight);
      }  else {
        // 탭 노트
        ctx.fillStyle = noteColors[n.lane];
        ctx.fillRect(x - w/2, n.y, w, tapHeight);
      }
    });


  
  
  
   // 판정선
   ctx.fillStyle='red'; ctx.fillRect(0,judgementLineY,gameWidth,4);
   // 레인
   ctx.strokeStyle='gray'; ctx.beginPath(); currentX=0; for(let i=0;i<=laneWidths.length;i++){ctx.moveTo(currentX,0);ctx.lineTo(currentX,canvas.height); if(i<laneWidths.length)currentX+=laneWidths[i]*laneUnit;} ctx.stroke();
 
       
 
   // ── 레인별 키 이미지 그리기 (설정 적용) ──
 // ── 레인별 키 이미지 그리기 (설정 적용) ──
 laneConfig
   .map((cfg, i) => ({ i, cfg, img: laneImages[i] }))
   .sort((a, b) => a.cfg.z - b.cfg.z)
   .forEach(({ i, cfg, img }) => {
     const laneX = laneWidths.slice(0, i).reduce((s, w) => s + w, 0) * laneUnit;
     const laneW = laneWidths[i] * laneUnit;
 
     // 1) 높이 고정
     const imgH = keyImageHeight;
 
     // 2) 너비: 스페이스바만 원본 그대로
     let imgW;
     if (i === 3) imgW = img.naturalWidth;
     else         imgW = img.naturalWidth * cfg.scale;
 
     // 3) 중앙 정렬 + X 오프셋
     const x = laneX + (laneW - imgW) / 2 + cfg.offsetX;
     // 4) Y 위치
     const y = judgementLineY + cfg.offsetY;
 
     // 5) 이미지 그리기
     ctx.drawImage(img, x, y, imgW, imgH);
 
     // ← 여기에 다음 틴트 코드를 추가하세요
     if (pressedLanes[i]) {
       ctx.fillStyle = 'rgba(128,128,128,0.5)';
       ctx.fillRect(x, y, imgW, imgH);
     }
   });


  
  // 콤보
  if (combo > 0) {
    // ── 바운스 오프셋 계산 ──
    const elapsed = (Date.now() - comboAnimStart) / 1000; // 초 단위
    const bounceDur = 0.1;   // 0.3초 동안
    let bounce = 0;
    if (elapsed < bounceDur) {
      // 사인 곡선으로 위로 튕겼다가 내려오기
      bounce = Math.sin((elapsed/bounceDur) * Math.PI) * 20; // 최대 20px 튕김
    }
  
    const cx = canvas.width / 2;
    // 'COMBO' 레이블은 y=100 기준 → 위아래 튕김 적용
    ctx.fillStyle = 'orange';
    ctx.font      = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('COMBO', cx, 100 - bounce);
  
    // 숫자(콤보 수)도 함께 튕기도록 y=120 기준에 같은 bounce 적용
    const cs = combo.toString();
    const ds = 16, cs2 = 12;
    const bw = cs.length * (8 * ds + cs2);
    const bx = cx - bw / 2;
    drawDotMatrixText(
      ctx,
      cs,
      bx,           // x 위치는 그대로
      120 - bounce, // y 위치에 bounce 적용
      { baseDotRadius: 6, dotSpacing: ds, charSpacing: cs2, color: '#00ccff', fadeTo: '#ffffff' }
    );
  }
  
  // 판정 텍스트
    // ── 판정 텍스트 애니메이션 ──
    // ── 판정 텍스트 "뽀잉" 애니메이션 ──
    if (judgeTexts.length) {
      const jt      = judgeTexts[0];
      const elapsed = (animNow - jt.time) / 1000;  // animNow = Date.now() 로 위에서 선언
      const maxLife = 1;      // 1초 뒤 제거
      const animDur = 0.1;    // 0.3초간 팝업
  
      if (elapsed < maxLife) {
        // 0.5 → 1.5 배로 커졌다 shrink → 고정
        const scale = elapsed < animDur
          ? 0.5 + (elapsed / animDur) * 1.0
          : 1;
  
        // 중앙 정렬
        const cx    = canvas.width  / 2;
        const cy    = 450;
        const ts    = jt.text;
        // 실제로 쓰는 dotSpacing, charSpacing 값과 똑같이 맞춥니다
const dotSpacing  = 6;
const charSpacing = 3;
const baseW = ts.length * (8 * dotSpacing + charSpacing);
const baseH = 8 * dotSpacing;

const col   = ts === 'MISS' ? '#ff0044' : '#00ccff';

ctx.save();
ctx.translate(cx, cy);
ctx.scale(scale, scale);
drawDotMatrixText(
  ctx, ts,
  -baseW / 2,
  -baseH / 2,
  { baseDotRadius: 1.5, dotSpacing, charSpacing, color: col, fadeTo: '#ffffff' }
);
ctx.restore();

        
  
        
      } else {
        // 1초 지나면 제거
        judgeTexts.shift();
      }
    }
  
  



  // 이펙트
  drawEffects(dt);
  // HP 바
  
  
  drawEffects(dt);
    // HP 바 (클리핑으로 노출 영역 제어: 이미지 아래쪽은 바닥, 위쪽은 gauge 비율만큼 노출)
    const hpX      = gameWidth + 10;
    const imgW     = hpImage.naturalWidth;
    const imgH     = hpImage.naturalHeight;
    // gauge 비율에 해당하는 높이만큼 이미지 하단을 노출
    const visibleH = (gauge / 100) * imgH;
    // 이미지 전체를 캔버스 하단에 부착할 Y 좌표
    const hpOffsetY = 60;  // ↑ 이 값을 늘리면 더 위로 올라갑니다
    // 이미지 전체를 캔버스 하단에서 hpOffsetY만큼 위에 부착
    const yPos     = canvas.height - imgH - hpOffsetY;


if (hpImage.complete) {
      ctx.save();
      // 클리핑 영역에도 동일한 오프셋 적용 (바닥에서 visibleH만큼, 위로 hpOffset 만큼)
      ctx.beginPath();
      ctx.rect(
        hpX,
        canvas.height - visibleH - hpOffsetY,
        imgW,
        visibleH
      );
      ctx.clip();
      // 이미지 전체를 그리되, 클리핑된 영역만 보이게
      ctx.drawImage(hpImage, hpX, yPos);
      ctx.restore();
    }




  // 상단 UI
  ctx.fillStyle='rgba(0,0,0,0.5)'; ctx.fillRect(0,0,canvas.width,50);
  ctx.fillStyle='lime'; ctx.font='20px Arial'; ctx.textAlign='left'; ctx.fillText('SCORE: '+score,20,32);
  ctx.fillStyle='white'; ctx.textAlign='right'; ctx.fillText('GAUGE: '+Math.floor(gauge)+'%',gameWidth-20,32);

  requestAnimationFrame(draw);
}

draw();
