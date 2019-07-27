import * as httpContext from "express-http-context";
import  * as uuid from "node-uuid";

const uuidMiddleware = (req, res, next) => {
    httpContext.set("reqId", uuid.v1());
    next();
};

export default uuidMiddleware;
