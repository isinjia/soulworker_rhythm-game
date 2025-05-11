const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// public 폴더처럼 현재 폴더 내 파일을 정적 제공
app.use(express.static(__dirname));

// 루트 경로로 접근하면 index.html 제공
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
