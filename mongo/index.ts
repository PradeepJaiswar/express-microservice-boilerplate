import mongoClass from "./src/mongo";
import  { logger } from "../src/utils";

const initialize = async (config) => {
    try {
        const mongoDriver = new mongoClass(config);
        await mongoDriver.initializeDriver();
        return mongoDriver.getMongoInstance();
    } catch (error) {
        logger.error(`MONGO_CONNECTOR :: Error connecting to Mongo ${JSON.stringify(error.message)}`);
    }
};

export default {
    initialize
};
