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
            "connectionLimit": 5
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



You will have to wrap initialization inside the async function.
