import services from "../services";

import  { Response, statusCode } from "../utils";

const defaultController = (req, res) => {
    // call some service
    services.defaultService();

    res.status(statusCode.OK_200).send(Response.success(
        statusCode.OK_200,
        `Hey, i am default`,
    ));
};

export default defaultController;
