import kafkaConsumer from "./src/consumer";
import kafkaProducer from "./src/producer";

import  { logger } from "../src/utils";

const initialize =  async(type, config) => {
    try {
        switch (type) {
            case "CONSUMER":
                const consumer = new kafkaConsumer(config, "earliest");
                await consumer.initializeDriver();
                return consumer.connectionInstance();
            case "PRODUCER" :
                const producer = new kafkaProducer(config);
                await producer.initializeDriver();
                return producer;
            default:
                logger.error("Invalid type argument provided for kafka connection. Please check argument (type = 'CONSUMER/PRODUCER', config = {})");
                return undefined;
        }
    } catch (error) {
        logger.error("KAFKA :: Error connecting to kafka " + JSON.stringify(error.message));
    }
};

export default {
    initialize
};
