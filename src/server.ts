import startApp from "./boot";
import  { logger } from "./utils";

(async (): Promise<void> =>  {
    try {
        await startApp();
        logger.info(`BOOT :: Application booted successfully!!`);
    } catch (err) {
        logger.error(`BOOT :: Error while booting application from sever.js : ${JSON.stringify(err.message)}`);
    }
})();
