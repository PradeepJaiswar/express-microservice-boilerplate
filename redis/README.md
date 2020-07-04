# Redis

## SUMMARY

Redis library that extends the APIs of [ioredis](https://www.npmjs.com/package/ioredis) for connecting Redis, Redis Sentinel and Redis Cluster. Library customized for microservices use case.

### Usage:
    // import redis module
    
    import * as RedisDriver from "path/to/redis/folder";

#### Connecting Redis
    (async () => {
        const redis = await RedisDriver.initialize("REDIS",{
        host: "127.0.0.1"
       });
        // Redis object is available for use
        console.log(redis);
    })();

#### Connecting Redis Sentinel
    (async () => {
        const redisSentinel = await RedisDriver.initialize("REDIS_SENTINEL", {
            "sentinels": [
                {
                    "host": "127.0.0.1",
                    "port": 26379
                },
                {
                    "host": "127.0.0.1",
                    "port": 26380
                },
                {
                    "host": "127.0.0.1",
                    "port": 26381
                }
            ],
            "name": "mymaster",
            "password": "",
            "database": 0
        });

        // Redis sentinel object is available for use
        console.log(redisSentinel);
    })();

#### Connecting Redis Cluster
    (async () => {
        const redisCluster =  await RedisDriver.initialize("REDIS_CLUSTER", {
            sentinels:[
                {
                    host :'aws.kctbut.clustercfg.aps1.cache.amazonaws.com',
                    port: 6379
                }
            ]
        });

        // Redis cluster object is available for use
        console.log(redisCluster);
    })();


### Test
Start your local mongo and build project

    // go to root of project and run
    npm run build

Test

Redis

    // go to root of project and run
    node build/mongo/examples/redis.js

Redis Sentinel

    // go to root of project and run
    node build/mongo/examples/redis-sentinel.js
    
Redis Cluster

    // go to root of project and run
    node build/mongo/examples/redis-cluster.js  

