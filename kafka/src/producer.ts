import * as kafka from "kafka-node";
import * as EventEmitter from "events";

import constants from "./utils/constants";
import { logger } from "../../src/utils";

export  default class Producer extends EventEmitter {
    producer;
    topic;
    partition;
    host;
    client;

    constructor(config) {
        super();
        const Producer = kafka.Producer;
        this.topic = config.topic;
        this.partition = config.partition;
        this.host = config.host;
        this.client = new kafka.KafkaClient(config.host);
        this.producer = new Producer(this.client);
    }

    // publish the message
    async publish(message: string |number | object) {
        let data: string;
        return new Promise((resolve, reject) => {

            switch (typeof message) {
                case "string":
                    data = message;
                    break;
                case "number":
                case "object":
                    data = JSON.stringify(message);
                    break;
                default:
                    logger.error(`KAFKA_PRODUCERS :: Invalid ${typeof message} data found`);
                    reject(`Invalid ${typeof message} data found`);
            }

            // set payload
            const payload = [{
                topic: this.topic,
                messages: JSON.stringify(data),
                partitions: this.partition
            }];

            // publish
            this.producer.send(payload, (err, result) => {
                if (err) {
                    logger.error(`KAFKA_PRODUCERS :: Error while producing the message. ${err}`);
                    reject();
                }
                resolve(result);
            });
        });
    }

    initializeDriver() {
        return new Promise((resolve, reject) => {
            this.producer.on("ready", () => {
                logger.debug(`KAFKA_PRODUCERS :: Connected to ${this.host} ready for publishing on topic ${this.topic}`);
                this.emit(constants.EventEnums.CONNECTION_SUCCESS);
                resolve();
            });
            this.producer.on("error", (err) => {
                logger.error(`KAFKA_PRODUCERS :: Error ${err} ${err.stack}`);
                this.emit(constants.EventEnums.CONNECTION_ERROR);
                reject();
            });
        });
    }

    connectionInstance() {
        return this.producer;
    }
}

