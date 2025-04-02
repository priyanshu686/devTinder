const express = require('express');
const { adddata,getdata ,getdatabyemail,updatedata,deleteData,login} = require('../Controller/UserController');
const route = express.Router();

route.post('/signup',adddata);
route.post('/login',login);
route.get('/info',getdata);
route.get('/info/:email',getdatabyemail);
route.patch('/update/:email',updatedata);
route.delete('/userDelete/:id',deleteData);


module.exports = route;