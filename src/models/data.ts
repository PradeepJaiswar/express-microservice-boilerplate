import { Connections, constants } from "../utils";

export default class Data {
    private connection;

    constructor() {
        this.connection = Connections.get(constants.CONNECTIONS.DATA);
    }

    public doSomething(): void {
        // do something with this.connection
        this.connection.something();  // this is just an example
    }
}
