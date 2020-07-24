import services from "../services";

import  { Response, statusCode } from "../utils";

import users from "../models/users";

const defaultController = async (req, res) => {

    console.log(await users.getInstance().getAllUsers());
    // call some service
    services.defaultService();

    res.status(statusCode.OK_200).send(Response.success( {
        "message" : " `Hey, i am default`,"
    }, {
        "link" : "http://localhost:8080/v1/default"
    }));
};

export default defaultController;
