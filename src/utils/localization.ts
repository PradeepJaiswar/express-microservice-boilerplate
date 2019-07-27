import enUs from "../../locales/en-us";
import  { logger } from "./index";

let locale: Object = {};

const setLocale = function (lan: string): boolean {
    try {
        switch (lan) {
            case "en-us":
                locale = enUs;
                break;
            default:
                locale = enUs;
                break;
        }
        return true;
    } catch (err) {
        logger.error(`Error in setting up locales : ${JSON.stringify(err.message)}`);
        return false;
    }
};

function localization (key: string): string {
    return locale[key] ? locale[key] : "";
}

// set up lang manually
setLocale("en-us");

export default localization;
