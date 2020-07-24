import * as express from "express";
import controller from "../controllers";

const router = express.Router();

router.get("/v1/mongo_demo", controller.mongoController);

export default router;
