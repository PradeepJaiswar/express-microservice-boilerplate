import * as  Redis from "ioredis";
const EventEmitter = require("events");

import constants from "./utils/constants";
import  { logger } from "../../src/utils";

export default class RedisClusterDriver extends EventEmitter {
    redisConfig;
    connection;

    constructor(config) {
        super();
        this.redisConfig = {
            retryStrategy: function (times) {
                return Math.min(times * 50, 2000);  // This is the default value of `retryStrategy`
            },
            reconnectOnError: (err) => {
                const targetError = "READONLY";
                // Only reconnect when the error starts with "READONLY"
                if (err.message.slice(0, targetError.length) === targetError) {
                    return true; // or `return 1;`
                }
            },
            showFriendlyErrorStack: true
        };

        this.connection = new Redis.Cluster(
            config.sentinels,
            this.redisConfig
        );
        this.redisConfig.sentinels = config.sentinels;
    }

    initializeDriver() {
        return new Promise((resolve, reject) => {
            this.connection.on("connect", () => {
                logger.info(`REDIS_CLUSTER_DRIVER :: Connection Successfully for Redis  -  ${JSON.stringify(this.redisConfig.sentinels)}`);
                this.emit(constants.EventEnums.CONNECTION_SUCCESS);
                resolve();
            });
            this.connection.on("error", (error) => {
                logger.error(`REDIS_CLUSTER_DRIVER :: Connection Error for Redis  -  ${JSON.stringify(this.redisConfig.sentinels)} - ${error}`);
                this.emit(constants.EventEnums.CONNECTION_ERROR);
                reject();
            });
            this.connection.on("end", () => {
                logger.error(`REDIS_CLUSTER_DRIVER :: Connection End for Redis -  ${JSON.stringify(this.redisConfig.sentinels)}`);
                this.emit(constants.EventEnums.CONNECTION_END);
                reject();
            });
            this.connection.on("close", () => {
                logger.error(`REDIS_CLUSTER_DRIVER :: Connection Closed for Redis  -   ${JSON.stringify(this.redisConfig.sentinels)}`);
                this.emit(constants.EventEnums.CONNECTION_CLOSED);
                reject();
            });
            this.connection.on("node error", (error) => {
                logger.error(`REDIS_CLUSTER_DRIVER :: Node Error for Redis  -   ${JSON.stringify(this.redisConfig.sentinels)} ${error}`);
                this.emit(constants.EventEnums.CONNECTION_CLOSED);
                reject();
            });
        });
    }

    connectionInstance() {
        return this.connection;
    }
}
