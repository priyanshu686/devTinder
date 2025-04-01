const express = require('express');
const { adddata,getdata ,getdatabyemail,updatedata,deleteData} = require('../Controller/UserController');
const route = express.Router();

route.post('/signup',adddata);
route.get('/info',getdata);
route.get('/info/:email',getdatabyemail);
route.patch('/update/:email',updatedata);
route.delete('/userDelete/:id',deleteData)

module.exports = route;