const orm = require('../config/orm.js');

const burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers').then(result => {
            cb(result)
        }).catch(err => console.log(err));
    },

    insertOne: function(nameInput,cb) {
        orm.insertOne('burgers', nameInput).then(result => {
            cb(result)
        }).catch(err => console.log(err));
    },

    updateOne: function(idInput,cb) {
        orm.updateOne('burgers', idInput).then(result => {
            cb(result)
        }).catch(err => console.log(err));
    },   
}

module.exports = burger;