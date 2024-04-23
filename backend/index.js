import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import database from "./config/database.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const port = process.env.PORT || 5000;
// const port = 5000;

// Ana sayfa için route tanımı
app.get("/", (req, res) => {
  res.send("Merhaba, Express!");
});

database();

// Sunucuyu dinlemeye başla
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı port üzerinden çalışıyor`);
});
