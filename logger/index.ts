import winstonLogger from "./winston-logger";

const logger = function (config = {}, callback) {
    winstonLogger.setLogConfig(config, callback);
    return winstonLogger.logger();
};

export default logger;
