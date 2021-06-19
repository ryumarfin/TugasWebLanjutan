const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const mysql = require("mysql")
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lengkong123_",
    database: "weblanjutan",
});

connection.connect((err) => {
    if(!err)
        console.log('Database Connected')
    else{
        console.log('Error')
    }
})

app.get('/', (req, res) =>{
    res.send(`<html>
                <body>
                    <form action="/todo" method ="post">
                        <input name = "deskripsi"/>
                        <button type = "submit">Add</button>
                    </form>
                </body>
            </html>`)
})

app.post('/todo', (req, res) => {
    let data = req.body.deskripsi
    connection.query("INSERT INTO dataaa (deskripsi) VALUES (?)", data, function (err, result) {
        if(err){
            console.log("error: ", err)
            return
        }
        // console.log(result)
        res.json(result)
    });
    // console.log(req)
    // res.end()
})

app.get('/todo', (req, res) => {
    connection.query("SELECT * FROM dataaa",  (err, result) => {
        if (err){
            console.log("error",err)
        }
        console.log(result);
        // res.send(result)
        res.json(result)
    })
})

app.delete('/todo/:id', (req, res) => {
    let id = req.params.id
    // console.log(id)
    let sql ="DELETE FROM dataaa WHERE id = ?;"
    connection.query(sql, id, (err, result) => {
        if (err) throw err;
        else {
            // console.log(result)
            console.log(`Row deleted: ${result.affectedRows}`);
        }
    })
    res.end()
    // res.send("adf")
})


app.listen(3000)