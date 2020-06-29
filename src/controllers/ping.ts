import  { logger, statusCode } from "../utils";

const pingController = (req, res) => {
    // check you service health check here
    logger.info(`Health check successful`);

    res.status(statusCode.OK_200).send({
        "ping": "pong"
    });
};

export default pingController;
