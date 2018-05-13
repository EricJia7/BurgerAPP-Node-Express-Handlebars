const connection = require('../config/connection_mysql.js');
const Burger = require('../config/connection_sequelize.js');

const orm = {
    selectAll: function(selTable) {
        return new Promise((resolve,reject) => {
            connection.query(`SELECT * FROM ${selTable} ;`, (err,result) => {
                if(err) reject(err);
                resolve(result);
            })
        })
    },

    insertOne: function(selTable,bgName) {
        return new Promise((resolve,reject) => {
            connection.query(`INSERT INTO ${selTable} (burger_name)  VALUES(${bgName}) ;`, (err,result) => {
                if(err) reject(err);
                resolve(result);
            })
        })
    },

    updateOne: function(selTable,id) {
        return new Promise((resolve,reject) => {
            connection.query(`SELECT * FROM ${selTable} WHERE id= ${id}; `, (err, result) => {
                if(err) reject(err);
                resolve(result);
            })
        });
    }
};

module.exports = orm;