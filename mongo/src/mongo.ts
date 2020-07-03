import * as mongoose from "mongoose";
import * as EventEmitter from "events";
import * as util from "util";

import constants from "./utils/constants";
import { logger } from "../../src/utils";

export default class Mongo extends EventEmitter {
    connection;
    URI: string;

    constructor(config) {
        super();
        this.URI = util.format("mongodb://%s/%s", config.hosts, config.database);
        logger.info(`MONGO_CONNECTOR :: Connecting to MongoDB database ${this.URI}`);

        const connectionConfig  = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            poolSize: config.connectionLimit ? config.connectionLimit : 5,
            reconnectTries: Number.MAX_VALUE,
            auto_reconnect: true,
            noDelay: true,
            keepAlive: true,
            connectTimeoutMS: 300000,
            socketTimeoutMS: 300000
        };

        // replica set setting
        if (config.rsName) {
            connectionConfig["replicaSet"] = config.rsName;
        }

        // username and password setting
        if (config.user && config.password) {
            connectionConfig["auth"] = {
                user: config.user,
                pass: config.password,
            };
        }

        this.connection = mongoose.createConnection(this.URI, connectionConfig, (err) => {
            if (err) {
                logger.error(`MONGO_CONNECTOR :: Could not connect to MongoDB database ${this.URI} - ${err.stack}`);
                this.emit(constants.EventEnums.CONNECTION_ERROR.toString());
            } else {
                logger.info(`MONGO_CONNECTOR :: Successfully connected to MongoDB database ${this.URI}`);
                this.emit(constants.EventEnums.CONNECTION_SUCCESS.toString(), this.connection);
            }
        });
    }

    initializeDriver() {
        const _this = this;
        return new Promise((resolve, reject) => {
            this.connection.on("open", function () {
                logger.info(`MONGO_CONNECTOR :: Successfully connected to MongoDB database ${_this.URI}`);
                _this.emit(constants.EventEnums.CONNECTION_SUCCESS.toString(), _this.connection);
                resolve();
            });

            this.connection.on("error", function (error) {
                logger.error(`MONGO_CONNECTOR :: There was an error in mongodb ${error}`);
                _this.emit(constants.EventEnums.CONNECTION_ERROR.toString(), error);
            });
            _this.connection.on("disconnected", function (error) {
                logger.error(`MONGO_CONNECTOR :: There was an disconnected in mongodb ${error}`);
                _this.emit(constants.EventEnums.CONNECTION_END.toString(), error);
            });
        });
    }

    getMongoInstance() {
        return this.connection;
    }
}
