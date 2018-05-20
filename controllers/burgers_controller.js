
const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', (req,res) => {
    burger.selectAll(function(data) {
        let bgObj = {
            burgers: data
        };
        res.render('index',bgObj);
    })
});

router.post('/api/burgers', (req,res) => {
    burger.insertOne(req.body.name, function(data){
        res.json({id: result.id});
    })
})

module.exports = router;
