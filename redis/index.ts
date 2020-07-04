import redisDriver from "./src/redis";
import redisSentinel from "./src/redis-sentinel";
import redisCluster from "./src/redis-cluster";

import  { logger } from "../src/utils";

const initialize = async (type: string, config: object): Promise< redisDriver | redisSentinel | redisCluster | undefined> => {
    try {
        let redisInstance: redisDriver | redisSentinel | redisCluster;
        switch (type) {
            case "REDIS":
                redisInstance = new redisDriver(config);
                await redisInstance.initializeDriver();
                return redisInstance.connectionInstance();
            case "REDIS_SENTINEL":
                redisInstance = new redisSentinel.RedisSentinelDriver(config);
                await redisInstance.initializeDriver();
                return redisInstance.connectionInstance();
            case "REDIS_CLUSTER":
                redisInstance = new redisCluster.RedisClusterDriver(config);
                await redisInstance.initializeDriver();
                return redisInstance.connectionInstance();
            default:
                logger.error("REDIS_DRIVER :: Invalid type argument provided for redis connection. Please check argument (type = 'REDIS/REDIS_SENTINEL/REDIS_CLUSTER', config = {})");
                return  undefined;
        }
    } catch (error) {
        logger.error(`REDIS_DRIVER :: Error connecting to redis ${JSON.stringify(error.message)}`);
    }
};

export  {
    initialize
};
