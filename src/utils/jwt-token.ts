import * as jwt from "jsonwebtoken";

const verify = (token: string, secret: string): Object => {
    try {
        return jwt.verify(
            token,
            secret,
            {
                algorithms: ["HS256"]
            }
        );
    } catch (err) {
        throw new Error(err.message);
    }
};

const generate = (data: object, secret: string) => {
    try {
        return jwt.sign(
            {
                timestamp: new Date().getTime(),
                ...data,
            },
            secret,
            {
                algorithm: "HS256"
            }
        );
    } catch (err) {
        throw new Error(err.message);
    }
};

export default {
    verify,
    generate,
};
