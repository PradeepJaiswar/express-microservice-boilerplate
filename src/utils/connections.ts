/**
 *  Connections singleton instance.
 *  This class should be used to setup connection during the boot process
 */
export default  class Connections {
    private static connections: Object = {};

    /**
     * The Connections's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    public static set(key: string , connection: any): void {
        Connections.connections[key] = connection;
    }

    public static get(key: string): any {
        return Connections.connections[key] ? Connections.connections[key] : false;
    }
}
