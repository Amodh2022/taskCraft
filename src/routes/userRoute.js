import { Router } from "express";
import { userController } from "../controller/userController.js";

const userRoute = Router();

userRoute.post("/",userController)

export { userRoute };
