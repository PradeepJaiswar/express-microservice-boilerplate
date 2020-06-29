import * as express from "express";
import controller from "../controllers";

const router = express.Router();

router.get("/v1/ping", controller.pingController);

export default router;
