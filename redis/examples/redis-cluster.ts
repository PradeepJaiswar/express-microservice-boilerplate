import * as RedisDriver from "../index";

(async () => {
    const redisCluster =  await RedisDriver.initialize("REDIS_CLUSTER", {
        sentinels:[
            {
                host :'aws.kctbut.clustercfg.aps1.cache.amazonaws.com',
                port: 6379
            }
        ]
    });
    //Redis cluster object is available for use
    console.log(redisCluster);
})();
