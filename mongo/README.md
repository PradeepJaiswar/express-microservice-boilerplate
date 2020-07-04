# Mongo Connector

## SUMMARY

Node library that extends the APIs of [mongoose](https://www.npmjs.com/package/mongoose) for connecting to Mongo.
Library is customized for microservices use case


### Usage:
    // import mongo module

    import  { mongo } from "path/to/utils";

#### Example

    import * as mongoose from "mongoose";
    import  { mongo } from "path/to/utils";
    
    const Schema = mongoose.Schema;
    
    (async() => {
        const config = {
            "hosts": "127.0.0.1:27017",
            "database": "admin",
            "connectionLimit": 5,  
            "rsName": "rs_name",  
            "user": "user",  
            "password": "password"
        };
        const mongoDriver = await mongo.initialize(config);
        const contracts = mongoDriver.model(
            "admin",
            new Schema({
                // your schema here
            }, {
                collection: "system.version"
            })
        );
    
        contracts.findOne({}, function (error, data) {
            console.log(data);
        });
    })();
   
### Test
Start your local mongo and build project

    // go to root of project and run
    npm run build

Test   

    node build/mongo/examples/mongoDriver.js
    
    // output should look something like below. Connets to deafult admin database -  mongodb-community@4.2 version
    
    [INFO] - 7/3/2020, 1:07:20 PM,902 - MONGO_CONNECTOR :: Connecting to MongoDB database mongodb://127.0.0.1:27017/admin
    (node:27141) DeprecationWarning: The option `reconnectTries` is incompatible with the unified topology, please read more by visiting http://bit.ly/2D8WfT6
    [INFO] - 7/3/2020, 1:07:20 PM,938 - MONGO_CONNECTOR :: Successfully connected to MongoDB database mongodb://127.0.0.1:27017/admin
    [INFO] - 7/3/2020, 1:07:20 PM,939 - MONGO_CONNECTOR :: Successfully connected to MongoDB database mongodb://127.0.0.1:27017/admin
    { version: '4.2' }

    
