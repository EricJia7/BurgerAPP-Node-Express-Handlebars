
const express = require('express');
const app = express();

const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', (req,res) => {
    console.log('Running')
    burger.selectAll(function(data) {
        let bgObj = {
            burgers: data
        };
        res.render('index',bgObj)
    })
});