const {CreateConnection, ReplayedConnection , GetConnection} = require('../Controller/ConnectionController');
const {userAuth} = require('../utils/Auth')
const express = require('express');
const ConnectionRoute = express.Router();

ConnectionRoute.post('/request/:status/:id',userAuth,CreateConnection);
ConnectionRoute.post('/request/replay/:status/:id',userAuth,ReplayedConnection)
ConnectionRoute.get('/request',userAuth,GetConnection);


module.exports = ConnectionRoute;
