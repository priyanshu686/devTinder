const express = require('express');
const { adddata,getdata ,getdatabyemail,updatedata,deleteData,login} = require('../Controller/UserController');
const{userAuth} = require('../utils/Auth');
const route = express.Router();

route.post('/signup',adddata);
route.post('/login',login);
// route.get('/info',getdata);
route.get('/info',userAuth,getdatabyemail);
route.patch('/update/:email',userAuth,updatedata);
route.delete('/userDelete/:id',userAuth,deleteData);


module.exports = route;