export default {
    switches : {
        new_relic : false,
        pug : false,
    },
    databases: {
        mongo: {
            host: "127.0.0.1",
            port: "27017",
            user_database: "express_microservice_boilerplate",
            user_collection: "users"
        },
        redis: {
            host: "127.0.0.1",
            port: "6379",
            user_database: 3,
        }
    },

};
