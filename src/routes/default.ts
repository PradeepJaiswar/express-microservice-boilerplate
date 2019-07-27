import * as express from "express";
import middleware from "../middlewares";
import controller from "../controllers";

const router = express.Router();

router.get("/v1/default", middleware.defaultMiddleware, controller.defaultController);

export default router;
