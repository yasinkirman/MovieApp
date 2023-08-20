import express from 'express';
import dotenv from 'dotenv';
import database from './config/database.js';

dotenv.config();
const app = express();
// const port = process.env.port || 5000;
const port = 3000;

// Ana sayfa için route tanımı
app.get('/', (req, res) => {
  res.send('Merhaba, Express!');
});

database();

// Sunucuyu dinlemeye başla
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı port üzerinden çalışıyor`);
});
