import services from "../services";
import  { Response, statusCode } from "../utils";

const defaultController = async (req, res) => {
    // call some service
    services.defaultService();

    res.status(statusCode.OK_200).send(Response.success( {
        "message" : " `Hey, i am default`,"
    }, {
        "link" : "http://localhost:8080/v1/default"
    }));
};

export default defaultController;
