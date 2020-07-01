const HOST = process.env.HOST || "0.0.0.0";

const environments = {
    "prod" : "PRODUCTION",
    "test" : "TEST",
    "uat" : "UAT",
};

const ENV = (process.env.ENV || process.env.NODE_ENV) || environments.test;

const PORT = process.env.PORT || 8080;

const SWITCHES  = {
    "PUG" : true
};

const connections  = {
    "DATA" : "DATA"
};

export default {
    environments,
    ENV,
    PORT,
    SWITCHES,
    HOST,
    connections,
};

