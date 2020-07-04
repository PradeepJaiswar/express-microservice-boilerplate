import * as RedisDriver from "../index";

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

    //Redis sentinel object is available for use
    console.log(redisSentinel);
})();
