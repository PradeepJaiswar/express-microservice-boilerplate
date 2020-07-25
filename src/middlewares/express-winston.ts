import * as expressWinstons from "express-winston";
import * as winston from "winston";

import  { constants } from "../utils";

const expressWinston = expressWinstons.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: constants.ENV != constants.ENVIRONMENTS.prod ? winston.format.prettyPrint({colorize: true}) : undefined,
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{res.statusCode}} {{req.method}} {{req.url}} {{res.responseTime}}ms",
});

export default expressWinston;
