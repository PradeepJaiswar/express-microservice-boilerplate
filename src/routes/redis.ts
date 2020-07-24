import * as express from "express";
import controller from "../controllers";

const router = express.Router();

router.get("/v1/redis_demo", controller.redisController);

export default router;
