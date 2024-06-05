import express from "express";
import cookieParser from "cookie-parser";

import cors from "cors";

const app = express();

app.use(
  //for middleware
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //for json data
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //for url data
app.use(express.static("public")); // for public accessible part
app.use(cookieParser()); //use for data through cookie

export { app };
