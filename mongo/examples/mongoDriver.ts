import * as mongoose from "mongoose";
import mongo from "../index";

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
