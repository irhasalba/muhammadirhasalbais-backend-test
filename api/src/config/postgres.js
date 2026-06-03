import { Client } from 'pg'

export default class PostgresSQL {
    host
    port
    userName
    pass
    dbName
    constructor(host, port, userName, pass, dbName) {
        this.dbName = dbName
        this.host = host
        this.userName = userName
        this.pass = pass
        this.port = port
    }

    async connect() {
        const client = await new Client({
            database: this.dbName,
            host : this.host,
            port : this.port,
            password : this.pass,
            user : this.userName
}).connect()

        try {
            console.log("success connected to db")
            return client
        } catch (err) {
            console.error(err);
        }
    }
}


