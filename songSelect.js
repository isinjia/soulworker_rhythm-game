// songSelect.js

const songs = [

  {
    id:        'mainTheme',
    title:     'Main Theme',
    starCount: 4,                        // ← 기본 난이도 별 개수
    folder:    'tracks/mainTheme',
    noteData:  'tracks/mainTheme/noteData.js',
    script:    'tracks/mainTheme/game.js'
  },

  {
    id:        'brokenSavior',
    title:     'BrokenSavior',
    starCount: 5,                        // ← 기본 난이도 별 개수
    folder:    'tracks/brokenSavior',
    noteData:  'tracks/brokenSavior/noteData.js',
    script:    'tracks/brokenSavior/game.js'
  },


  // 추가 트랙이 있으면 여기 계속 나열
];

let selected = 0;

let currentDiff   = 'easy';  // EASY / NORMAL / HARD
let currentSpeed  = 3;       // 1 / 2 / 3
const listEl    = document.getElementById('list');
const coverImg   = document.getElementById('coverImg');
const songTitle = document.getElementById('songTitle');
const starRating = document.getElementById('starRating');
const startBtn     = document.getElementById('startBtn');
const selectScreen = document.getElementById('songSelect');
const gameWrapper  = document.getElementById('game-container');
const bgmPlayer    = document.getElementById('bgm');

// ① 목록 렌더링
// songSelect.js

function renderList() {
  const ul = document.getElementById('list');
  ul.innerHTML = '';              // 초기화

  songs.forEach((s, i) => {
    // ★ 문자열 생성 (starCount: 0~5)
    const full  = '★'.repeat(s.starCount);
    const empty = '☆'.repeat(5 - s.starCount);
    const stars = full + empty;

    const li = document.createElement('li');
    li.innerHTML = `
      <!-- ① 커버 썸네일 -->
      <img
        class="cover-thumb"
        src="${s.folder}/cover.jpg"
        alt="${s.title} cover"
      />
      <!-- ② 곡 제목 -->
      <span class="song-title">${s.title}</span>
      <!-- ③ 별 평점 -->
      <span class="star-rating">
        ${'★'.repeat(s.starCount) + '☆'.repeat(5 - s.starCount)}
      </span>
    `;

    // 클릭 시 선택 & 미리보기 갱신
    li.addEventListener('click', () => {
      selected = i;
      updatePreview();
      // selected 클래스 토글
      document.querySelectorAll('#list li').forEach(x => x.classList.remove('selected'));
      li.classList.add('selected');
    });

    // 초기 선택 표시
    if (i === selected) li.classList.add('selected');

    ul.appendChild(li);
  });
}

// ─────────── B. 토글 버튼 이벤트 바인딩 ───────────
// 난이도 토글
document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.diff-btn').forEach(x => x.classList.remove('selected'));
    btn.classList.add('selected');
    currentDiff = btn.dataset.diff;
    updatePreview();
  });
});
// 속도 토글
document.querySelectorAll('.speed-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.speed-btn').forEach(x => x.classList.remove('selected'));
   btn.classList.add('selected');
    currentSpeed = parseInt(btn.dataset.speed, 10);
  });
});



// 초기 렌더 & 프리뷰
renderList();
updatePreview();

// ─── 키보드 네비게이션 (선택 화면에서만) ───
document.addEventListener('keydown', e => {
  // 선택 화면이 보일 때만 작동
  if (selectScreen.style.display === 'none') return;

  // 위/아래 이동: ArrowUp, W / ArrowDown, S
  if (e.code === 'ArrowUp' || e.code === 'KeyW') {
    selected = (selected - 1 + songs.length) % songs.length;
    renderList();
    updatePreview();
    e.preventDefault();
  } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
    selected = (selected + 1) % songs.length;
    renderList();
    updatePreview();
    e.preventDefault();
  }

  // 스페이스바 → PLAY 버튼 실행
  else if (e.code === 'Space') {
    startBtn.click();
    e.preventDefault();
  }

  // ←/A → 난이도 이전, →/D → 난이도 다음
  else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
    const diffs = ['easy','normal','hard'];
    let idx = diffs.indexOf(currentDiff);
    idx = (idx - 1 + diffs.length) % diffs.length;
    currentDiff = diffs[idx];
    // 버튼 UI 갱신
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
    document.querySelector(`.diff-btn[data-diff="${currentDiff}"]`).classList.add('selected');
    updatePreview();
    e.preventDefault();
  }
  else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
    const diffs = ['easy','normal','hard'];
    let idx = diffs.indexOf(currentDiff);
    idx = (idx + 1) % diffs.length;
    currentDiff = diffs[idx];
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
    document.querySelector(`.diff-btn[data-diff="${currentDiff}"]`).classList.add('selected');
    updatePreview();
    e.preventDefault();
  }


    // Z: 배속 한 단계 낮추기 (최소 X1)
  else if (e.code === 'KeyZ') {
    const speeds = [1,2,3];
    let idx = speeds.indexOf(currentSpeed);
    idx = Math.max(0, idx - 1);
    currentSpeed = speeds[idx];
    // UI 갱신
    document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('selected'));
    document.querySelector(`.speed-btn[data-speed="${currentSpeed}"]`).classList.add('selected');
    e.preventDefault();
  }

  // C: 배속 한 단계 올리기 (최대 X3)
  else if (e.code === 'KeyC') {
    const speeds = [1,2,3];
    let idx = speeds.indexOf(currentSpeed);
    idx = Math.min(speeds.length - 1, idx + 1);
    currentSpeed = speeds[idx];
    // UI 갱신
    document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('selected'));
    document.querySelector(`.speed-btn[data-speed="${currentSpeed}"]`).classList.add('selected');
    e.preventDefault();
  }






});


// ② 미리보기 업데이트
function updatePreview() {
  const s = songs[selected];
  coverImg.src = `${s.folder}/cover.jpg`;
  
  

  songTitle.textContent  = s.title;
  starRating.textContent = '★'.repeat(s.starCount) + '☆'.repeat(5 - s.starCount);
}

renderList();
updatePreview();

// ③ PLAY 버튼 클릭
startBtn.addEventListener('click', () => {
  const s = songs[selected];


  // 전역값 설정 → game.js 에서 사용
  window.selectedDifficulty = currentDiff;
  window.speedMultiplier    = currentSpeed;

  // 화면 전환
  selectScreen.style.display = 'none';
  gameWrapper.style.display  = 'block';


      // ─── 배경 영상 동적 로딩 ───
    const bgVideo = document.getElementById('bgVideo');
    // 미리 깔려 있던 배경 이미지는 지워 두고
    document.body.style.backgroundImage = '';
    bgVideo.style.display = 'block';

    // 영상 로드 실패 시 (404 등) 호출
    bgVideo.onerror = () => {
      bgVideo.style.display = 'none';
      // cover.jpg 로 대체
      document.body.style.backgroundImage = `url(${s.folder}/cover.jpg)`;
      document.body.style.backgroundSize     = 'cover';
      document.body.style.backgroundPosition = 'center';
    };

    // 시도할 영상 경로 (tracks/‹id›/bg.mp4)
    bgVideo.src = `${s.folder}/bg.mp4`;
    bgVideo.load();












  // BGM 재생
  bgmPlayer.src = `assets/bgm/${s.id}.mp3`;
 

  // 1) 노트 데이터 로드
 // 1) 노트 데이터 로드 (난이도 폴더 포함)
  const noteTag = document.createElement('script');
  noteTag.src   = `${s.folder}/${currentDiff}/noteData.js`;  
  document.body.appendChild(noteTag);

  // 2) game.js는 noteData.js가 로드된 뒤에 실행
  noteTag.onload = () => {
    const gameTag = document.createElement('script');
    gameTag.src   = `${s.folder}/${currentDiff}/game.js`;
    document.body.appendChild(gameTag);
  };
});



