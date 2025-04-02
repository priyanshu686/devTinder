const mongoose = require('mongoose');
const validator = require('validator')
const UserSchema =  new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        maxlength:15,
        minLength:5,
    },
    lastName:{
        type:String,
        maxlength:15,

    },
    email:{
        type: String,
        required: true,
        unique: true,
        validation(value){
            if(!validator.isEmail(value)){
                throw new error("Email is not Valid");
            }
        },
        lowercase: true,
        trim:true,

    },
    DOB:{
        type: Date,
        required: true,
    },
    gender:{
        type:String,
        validation(value){
            if(!["Male","Female","Other"].includes(value)){
                throw new Error("Gender is not valid");
            }
        }
    },
    Password:{
        type:String,
        validation(value){
            if(!validator.isStrongPassword(value)){
                throw new error("Please Create Strong Password")
            }
        },
    },
    TechnicalSkills:{
        type:[String],

    }
},{
    timestamps:true,
})

module.exports = mongoose.model("User",UserSchema);