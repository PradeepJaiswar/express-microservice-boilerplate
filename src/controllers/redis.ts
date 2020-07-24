import { Response, statusCode } from "../utils";

import Models from "../models";

const redisController = async (req, res) => {
    // dummy key value pairs
    const key = "ping";
    const value = "pong";

    // set and get value
    const redis = new Models.Redis();
    await redis.set(key, value);
    const getValue  = await redis.get(key);

    res.status(statusCode.OK_200).send(Response.success( {
        key : key,
        value : getValue
    }, {
        "link" : "http://localhost:8080/v1/redis_demo"
    }));
};

export default redisController;
