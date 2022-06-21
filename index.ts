import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";

import mogoose from "mongoose";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log("Server ok");
});
