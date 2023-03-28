import express from "express";
import userRoute from "./routes/user.js";
import taskRoute from "./routes/task.js";
import cors from "cors";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";

export const app = express();
config({
  path: "./data/config.env",
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:[process.env.FRONTEND_URL],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))

app.use("/api/v1/users", userRoute);
app.use("/api/v1/task", taskRoute);

app.get("/", (req, res) => {
  res.send("Nice Working");
});

app.use(errorMiddleware);
