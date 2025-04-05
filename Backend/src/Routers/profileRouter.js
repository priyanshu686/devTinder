const express = require('express');
const route = express.Router();
const{userAuth} = require('../utils/Auth');
const { getdatabyemail,updatedata,deleteData,updatePassword} = require('../Controller/profileController');


route.get('/info',userAuth,getdatabyemail);
route.patch('/update',userAuth,updatedata);
route.delete('/userDelete',userAuth,deleteData);
route.patch('/updatepassword',userAuth,updatePassword);

module.exports = route;