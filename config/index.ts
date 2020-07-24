import devConfig from "./dev/index";
import testConfig from "./test/index";
import uatConfig from "./uat/index";
import prodConfig from "./prod/index";

const getConfigFiles =  (environment) => {
    const env = environment && (typeof environment === "string") ?  environment.toLocaleLowerCase() : undefined;
    switch (env) {
        case "dev":
            return devConfig;
        case "test":
            return testConfig;
        case "uat":
            return uatConfig;
        case "production":
            return prodConfig;
        default:
            console.error("Invalid type argument provided for config. Currently supported config type are dev, test, uat, production");
            return devConfig;
    }
};

export default {
    getConfigFiles
};
