import * as  Redis from "ioredis";
import * as EventEmitter from "events";

import constants from "./utils/constants";
import  { logger } from "../../src/utils";

export default class RedisDriver extends EventEmitter {
    redisConfig;
    connection: Redis;
    defaultHost: string     = "127.0.0.1";
    defaultPort: number     = 6379;
    defaultPassword: string = "";
    defaultDatabase: number = 0;

    constructor(config) {
        super();
        if (!config) {
            config = {};
        }

        this.redisConfig = {
            host: config.host || this.defaultHost,
            port: config.port || this.defaultPort,
            password: config.password || this.defaultPassword,
            db: config.database || this.defaultDatabase,
            retryStrategy: function (times) {
                return Math.min(times * 50, 2000); // This is the default value of `retryStrategy`
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
        this.connection = new Redis(this.redisConfig);
    }

    initializeDriver() {
        const _this = this;
        return new Promise((resolve, reject) => {
            this.connection.on("connect", () => {
                logger.info(`REDIS_DRIVER :: Connection Successfully for Redis  -  ${_this.redisConfig.host}:${_this.redisConfig.port}/${_this.redisConfig.db}`);
                _this.emit(constants.EventEnums.CONNECTION_SUCCESS);
                resolve();
            });
            _this.connection.on("error", (error) => {
                logger.error(`REDIS_DRIVER :: Connection Error for Redis  -  ${_this.redisConfig.host}:${_this.redisConfig.port}/${_this.redisConfig.db} ${error}`);
                _this.emit(constants.EventEnums.CONNECTION_ERROR);
                reject();
            });
            _this.connection.on("end", () => {
                logger.error(`REDIS_DRIVER :: Connection End for Redis -  ${_this.redisConfig.host}:${_this.redisConfig.port}/${_this.redisConfig.db}`);
                _this.emit(constants.EventEnums.CONNECTION_END);
                reject();
            });
            _this.connection.on("close", () => {
                logger.error(`REDIS_DRIVER :: Connection Closed for Redis  -  ${_this.redisConfig.host}:${_this.redisConfig.port}/${_this.redisConfig.db}`);
                _this.emit(constants.EventEnums.CONNECTION_CLOSED);
                reject();
            });
            _this.connection.on("node error", (error) => {
                logger.error(`REDIS_DRIVER :: Node Error for Redis  -  ${_this.redisConfig.host}:${_this.redisConfig.port}/${_this.redisConfig.db} ${error}`);
                _this.emit(constants.EventEnums.CONNECTION_CLOSED);
                reject();
            });
        });
    }

    connectionInstance() {
        return this.connection;
    }
}


