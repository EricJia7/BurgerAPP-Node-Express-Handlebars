require('dotenv').config();

const mysql = require("mysql");

const mysql_password = require('../keys.js')

var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: mysql_password,
        database: 'burgers_db',
    });
}

connection.connect((err) => {
    if (err) {
        console.error('error connection: '+ err.stack);
        return;
    }
    console.log('Connected as id: ' + connection.threadId);
})

module.exports = connection;