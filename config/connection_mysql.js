require('dotenv').config();
const mysql = require("mysql");

const mysql_password = require('../keys.js')

const connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: mysql_password,
    database: 'burgers_db',
});

connection.connect((err) => {
    if (err) {
        console.error('error connection: '+ err.stack);
        return;
    }
    console.log('Connected as id: ' + connection.threadId);
})

module.exports = connection;