import express from 'express';
const app = express();
const port = 3000;

// Ana sayfa için route tanımı
app.get('/', (req, res) => {
  res.send('Merhaba, Express!');
});

// Diğer bir route tanımı
// app.get('/hakkimizda', (req, res) => {
//   res.send('Hakkımızda sayfasına hoş geldiniz.');
// });

// Sunucuyu dinlemeye başla
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı port üzerinden çalışıyor`);
});
