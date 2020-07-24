const HOST = process.env.HOST || "0.0.0.0";

const environments = {
    "prod" : "production",
    "uat" : "uat",
    "test" : "test",
    "dev" : "dev",
};

const ENV = (process.env.ENV || process.env.NODE_ENV) || environments.dev;

const PORT = process.env.PORT || 8080;

const SWITCHES  = {
    "NEW_RELIC": false,
    "PUG" : true
};

const REDIS_SERVER_TYPE = {
    REDIS: "REDIS",
    REDIS_SENTINEL: "REDIS_SENTINEL",
    REDIS_CLUSTER: "REDIS_CLUSTER"
};

const connections  = {
    "DATA" : "DATA",
    "MONGO" : "MONGO",
    "REDIS" : "REDIS"
};


export default {
    environments,
    ENV,
    PORT,
    SWITCHES,
    HOST,
    connections,
    REDIS_SERVER_TYPE
};

