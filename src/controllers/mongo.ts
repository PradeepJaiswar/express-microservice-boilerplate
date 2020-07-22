import  { Response, statusCode } from "../utils";

import users from "../models/users";

const mongoController = async (req, res) => {

    const allUsers = await users.getInstance().getAllUsers();

    res.status(statusCode.OK_200).send(Response.success( {allUsers}, {
        "link" : "http://localhost:8080/v1/mongo"
    }));
};

export default mongoController;
