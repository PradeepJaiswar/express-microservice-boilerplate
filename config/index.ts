const getConfigFiles =  (environment) => {
    const env = environment && (typeof environment === "string") ?  environment.toUpperCase() : undefined;
    switch (env) {
        case "TEST":
            return require("./test/index");
        case "UAT":
            return require("./../config/uat/index");
        case "PRODUCTION":
            return require("./prod/index");
        default:
            console.error("Invalid type argument provided for config. Currently supported config type are TEST, UAT, PROD");
            return undefined;
    }
};

export default getConfigFiles;
