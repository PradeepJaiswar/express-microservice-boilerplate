# Winston Logger


## SUMMARY

Logging library that combines the simple APIs of [winston](https://www.npmjs.com/package/winston)

Library is customized for microservices use case

## USAGE
    
    // import logger module
   
    import  { logger } from "path/to/utils";

A logger has different levels of logging as below.

    'error', 'warn', 'info', 'verbose', 'debug', 'silly'


Each of these log levels has its own method on the logging instance. You can set the maximum log level on a logger at runtime. Default is debug.

### Logging:

    logger.info("I am info");
    // [INFO] - 6/7/2019, 10:50:50 AM,308 - I am info

    logger.error("I am error");
    [ERROR] - 6/7/2019, 10:50:50 AM,310 - I am error

    logger.debug('This wont be logged');
    //=> false

### Customization:

You can customize the logger by overriding the logger options in file `src/utils/looger.js`. Below is example with default values.
For changing default value i advice to put this value in config file and read from there.
    
    const logger = winstonLogger({
      logLevelFile: "debug",    
      logLevelConsole: "debug",
      logfileRootPath: "logs",
      logfileMaxsize: 10485760,
      maxNoLogfile: 2,
    });
