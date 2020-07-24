import { Connections, constant, config } from "../utils";
import * as mongoose from "mongoose";

class Users {

    public static Users;
    private usersModel;
    readonly collectionName;

    constructor() {
        this.collectionName = config.databases.mongo.user_collection;
        this.setDbModel();
    }

    public static getInstance(): Users {
        if (!this.Users) {
            this.Users = new Users();
            return this.Users;
        }
        return this.Users;
    }

    private setDbModel() {
        const mongoConnection = Connections.get(constant.connections.MONGO);
        const Schema = mongoose.Schema;
        const bodDetailsSchema = new Schema({
            name: { type: String, required: true },
            email: { type: String, required: true  },
            phone: { type: Number, required: false  }
        },
        {
            collection:  this.collectionName
        });
        this.usersModel = mongoConnection.model(
            this.collectionName,
            bodDetailsSchema
        );
    }

    public async getAllUsers() {
        const queryFilter = {
        };
        return  await this.usersModel.find(queryFilter, {}, {lean: true});
    }

}

export default Users;
