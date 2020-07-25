import { Connections, constants } from "../utils";

export default class Redis {
    private redis;

    constructor() {
        this.redis = Connections.get(constants.CONNECTIONS.REDIS);
    }

    public set(key: string, value: string) {
        this.redis.set(key, value);
    }

    public get(key: string): string {
        return this.redis.get(key);
    }
}
