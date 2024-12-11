import express from "express";
import cookieParser from "cookie-parser";
import { userRoute } from "./routes/userRoute.js";
import { loginRoute } from "./routes/loginRoute.js";

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

app.use("/api/signUpUser", userRoute);

app.use("/api/login", loginRoute);

export { app };
