import express from "express"
import PostgresSQL from "./config/postgres.js"
import dotenv from "dotenv"
import Students from "./internal/students/students.js"


// dotenv.config({
//     path : ""
// })
const app = express()
const port = 3000 // it can be configurable

/*
all of this config it must be moved into env, but cause time limit it put in all together in main.js
*/
const postgres = new PostgresSQL(
    "159.65.11.206",
    "5432",
    "test",
    "test",
    "master"
)

const pg = await postgres.connect()
const student = new Students(pg)


app.get('/', async (req, res) => {
const result = await pg.query('SELECT $1::text as message', ['Hello world!'])
console.log(result.rows[0].message) // Hello world!

await pg.end()
res.send('Hello World!')
})

/*
route must be moved into internal/http/routes.js but because of limit time it put in into single line it is not clean code 
*/ 

app.get("/students",async(req,res) => {

    const result = await pg.query('SELECT * FROM murid')
    await pg.end()
    res.json(result.rows)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})