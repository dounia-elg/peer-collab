import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();

app.listen(3000, () => {
  console.log("app is listenning on port 3000");
});
