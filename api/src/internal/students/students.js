
export default class Students {
    pgClient
    constructor(pg) {
        this.pgClient = pg
        console.log(this.pgClient.query('select * from murid'))
    }   

    async getAllStudent(req,res) {
        const result = await this.pgClient.query('SELECT * FROM murid')
        res.json(result.rows)
    }
}