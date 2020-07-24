/*
* On successful initialization invoke resolve
* Resolve will trigger next initializer
*
* On fail initialization you can invoke reject
* Reject will stop the booting up of express app. In case you don't want to stop booting process if initialization fails invoke resolve
 */

import { config, Connections, constant, logger, mongo } from "../../utils";

const init = async function (): Promise<void> {
    try {
        logger.info(`BOOT :: Connecting Mongo at : ${JSON.stringify(config.databases.mongo.host)}`);
        const mongoClient = await mongo.initialize({
            "hosts": config.databases.mongo.host,
            "database": config.databases.mongo.user_database,
            "connectionLimit": 5
        });

        Connections.set(constant.connections.MONGO, mongoClient);
        logger.info(`BOOT :: Connected Mongo at : ${JSON.stringify(config.databases.mongo.host)}, DB: ${config.databases.mongo.user_database}`);

    } catch (err) {
        logger.error(`BOOT :: Error connecting to Mongo server at ${config.databases.mongo.host} :: message: ${err.message} :: stack : ${err.stack}`);
        throw  new Error(err.message);
    }
};

export default init;
