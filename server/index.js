const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require("cors")

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'contra',
    database: 'tracker'
})

app.post('/create', (req, res) => {
    const lift =req.body.lift
    const run =req.body.run
    const comments =req.body.comments
    const feeling =req.body.feeling
    const date =req.body.date

    db.query('INSERT INTO stats (lift, run, comments, feeling, date) VALUES (?, ?, ?, ?, ?)',
    [lift, run, comments, feeling, date], 
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values Inserted")
        }
    }
    )
})

app.get('/workouts', (req, res) => {
    db.query("SELECT * FROM stats", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
})


app.listen(3001, ()=> {
    console.log('your server is running')
})