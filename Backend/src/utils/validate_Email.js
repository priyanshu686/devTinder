const { default: mongoose } = require('mongoose');
const Validator = require('validator');
const User = require('../Models/UserModel');



const emailcheck = (req)=>{
        if(!Validator.isEmail(req.body.email)){
            throw new Error("Email Syntax is Valid")
        }
}



module.exports = {emailcheck};