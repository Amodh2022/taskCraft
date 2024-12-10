import express from "express";
import cookieParser from "cookie-parser";
import { healthCheckRoute } from "./routes/healthCheckRouter.js";

const app = express();

app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
app.use(cookieParser());

app.use("/api/v1/health-check", healthCheckRoute);

export { app };
