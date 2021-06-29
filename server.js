//const { restElement } = require('@babel/types');
const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express()

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your MySQL username,
        user: 'root',
        //your MySQL password
        password: '0wXeV88db!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);
//GET test route 
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

//default repsonse for any other request
app.use((req, res) => {
    res.status(404).end();
});

//function to start express.js on PORT 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

