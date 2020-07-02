"use strict";

import startApp from "./boot";
import  { constant, logger } from "./utils";

// Enable of newrelic switch is on
if (constant.SWITCHES.NEW_RELIC && constant.ENV === constant.environments.prod) {
  require("newrelic");
}

(async (): Promise<void> =>  {
    try {
        await startApp();
        logger.info(`BOOT :: Application booted successfully!!`);
    } catch (err) {
        logger.error(`BOOT :: Error while booting application from sever.js : ${JSON.stringify(err.message)}`);
    }
})();
