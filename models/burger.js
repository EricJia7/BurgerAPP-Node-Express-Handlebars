const orm = require('../config/orm.js');

const burger = {
    selectAll: function() {
        orm.selectAll('burgers').then(result => {
            console.log(result)
        }).catch(err => console.log(err));
    },

    insertOne: function(nameInput) {
        orm.insertOne('burgers', nameInput).then(result => {
            console.log(result)
        }).catch(err => console.log(err));
    },

    updateOne: function(idInput) {
        orm.updateOne('burgers', idInput).then(result => {
            console.log(result)
        }).catch(err => console.log(err));
    },   
}

module.exports = burger;