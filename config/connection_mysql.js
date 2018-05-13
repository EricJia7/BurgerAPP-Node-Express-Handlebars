require('dotenv').config();

const mysql_key = require('../keys.js')

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: mysql_key.password,
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