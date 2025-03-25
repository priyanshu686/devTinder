const express = require('express');
const { adddata,getdata } = require('../Controller/UserController');
const route = express.Router();

route.post('/signup',adddata);
route.get('/info',getdata)

module.exports = route