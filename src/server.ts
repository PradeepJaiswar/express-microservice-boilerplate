"use strict";

import startApp from "./boot";
import  { constants, logger } from "./utils";

// Enable newrelic if switch is on
if (constants.SWITCHES.NEW_RELIC && constants.ENV === constants.ENVIRONMENTS.prod) {
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
