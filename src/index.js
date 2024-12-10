import dotenv from "dotenv";
import { connectDb } from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 3000;

dotenv.config({
  path: "./.env",
});

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Port is Listening ${port}`);
    });
  })
  .catch((e) => {
    console.log("Mongo Error", e);
  });
