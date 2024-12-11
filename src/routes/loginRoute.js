import { Router } from "express";
import { loginController } from "../controller/loginController.js";

const loginRoute = Router();

loginRoute.post("/",loginController)

export { loginRoute };