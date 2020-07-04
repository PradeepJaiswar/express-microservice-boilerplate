import * as  Redis from "ioredis";
const EventEmitter = require("events");

import constants from "./utils/constants";

export default class RedisSentinelDriver extends EventEmitter {
    connection;
    redisConfig;
    defaultHost: string     = "127.0.0.1";
    defaultPort: number     = 26379;
    defaultPort2: number     = 26380;
    defaultName: string = "mymaster";
    defaultDatabase: number = 0;

    constructor(config) {
        super();
        if (!config) {
            config = {};
        }

        this.redisConfig = {
            sentinels: config.sentinels || [{
                host: this.defaultHost,
                port: 26379
            }, {
                host: this.defaultHost,
                port: this.defaultPort2
            }],
            name: config.name || this.defaultName,

            retryStrategy: function (times) {
                return Math.min(times * 50, 2000);  // This is the default value of `retryStrategy`
            },

            reconnectOnError: (err) => {
                const targetError = 'READONLY';
                if (err.message.slice(0, targetError.length) === targetError) {
                    // Only reconnect when the error starts with "READONLY"
                    return true; // or `return 1;`
                }
            },
            password: config.password || undefined,
            showFriendlyErrorStack: true
        };
        this.connection = new Redis(this.redisConfig);
        this.redisConfig.db = config.database;
    }

    initializeDriver() {
        return new Promise((resolve, reject) => {
            this.connection.on("connect", () => {
                console.info(`REDIS_SENTINEL_DRIVER :: Connection Successfully for Redis  -  ${JSON.stringify(this.redisConfig.sentinels)}/${this.redisConfig.db}`);
                this.connection.select(this.redisConfig.db);
                this.emit(constants.EventEnums.CONNECTION_SUCCESS);
                resolve();

            });
            this.connection.on("error", (error) => {
                console.error(`REDIS_SENTINEL_DRIVER :: Connection Error for Redis  -  ${JSON.stringify(this.redisConfig.sentinels)}/${this.redisConfig.db} - ${error}`);
                this.emit(constants.EventEnums.CONNECTION_ERROR);
                reject();

            });
            this.connection.on("end", () => {
                console.error(`REDIS_SENTINEL_DRIVER :: Connection End for Redis -  ${JSON.stringify(this.redisConfig.sentinels)}/${this.redisConfig.db}`);
                this.emit(constants.EventEnums.CONNECTION_END);
                reject();
            });
            this.connection.on("close", () => {
                console.error(`REDIS_SENTINEL_DRIVER :: Connection Closed for Redis  -   ${JSON.stringify(this.redisConfig.sentinels)}/${this.redisConfig.db}`);
                this.emit(constants.EventEnums.CONNECTION_CLOSED);
                reject();
            });
            this.connection.on("node error", (error) => {
                console.error(`REDIS_SENTINEL_DRIVER :: Node Error for Redis  -   ${JSON.stringify(this.redisConfig.sentinels)}/${this.redisConfig.db} ${error}`);
                this.emit(constants.EventEnums.CONNECTION_CLOSED);
                reject();
            });
        });
    }

    connectionInstance() {
        return this.connection;
    }
}
