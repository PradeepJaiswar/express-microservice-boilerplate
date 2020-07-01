import * as express from "express";
import controller from "../controllers";

const router = express.Router();

router.get("/v1/pug_demo", controller.pugController);

export default router;
