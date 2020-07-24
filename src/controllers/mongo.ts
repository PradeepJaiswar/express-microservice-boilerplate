import  { Response, statusCode } from "../utils";

import Models from "../models";

const mongoController = async (req, res) => {

    const allUsers = await Models.Users.getInstance().getAllUsers();

    res.status(statusCode.OK_200).send(Response.success( allUsers, {
        "link" : "http://localhost:8080/v1/mongo_demo"
    }));
};

export default mongoController;
