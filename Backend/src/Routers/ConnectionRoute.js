const {CreateConnection} = require('../Controller/ConnectionController');
const {userAuth} = require('../utils/Auth')
const express = require('express');
const ConnectionRoute = express.Router();

ConnectionRoute.post('/request/:status/:id',userAuth,CreateConnection);


module.exports = ConnectionRoute;
