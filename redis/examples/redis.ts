import * as RedisDriver from "../index";

(async () => {
    const redis = await RedisDriver.initialize(
        "REDIS",
        {
            host: "127.0.0.1"
        });

    // Redis object is available for use
    console.log(redis);
})();
