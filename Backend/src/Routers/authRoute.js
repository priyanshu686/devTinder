const express = require('express');
const multer = require("multer");
const path = require("path");
const fs = require("fs")
const { adddata,login} = require('../Controller/authController');

const route = express.Router();


route.post('/signup',adddata);
route.post('/login',login);
// route.get('/info',getdata);
route.post('/logout',(req,res)=>{
    res.cookie('token',null,{
        expires: new Date(Date.now())
    }).send("Logout Succesful")
})


module.exports = route;