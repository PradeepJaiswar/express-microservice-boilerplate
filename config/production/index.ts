export default {
    switches : {
        new_relic : false,
        pug : false,
    },
    databases: {
        mongo: {
            enable: false,
            host: "",
            port: "",
            user_database: "",
            user_collection: ""
        },
        redis: {
            enable: false,
            host: "127.0.0.1",
            port: "6379",
            user_database: 3,
        }
    }
};
