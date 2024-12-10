import { Router } from "express";
import { healthCheck } from "../controller/healthCheckController.js";

const healthCheckRoute = Router();

healthCheckRoute.route("/").get(healthCheck);

export { healthCheckRoute };
