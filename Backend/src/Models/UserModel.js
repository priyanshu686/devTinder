const mongoose = require('mongoose');
const UserSchema =  new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    DOB:{
        type: Date,
        required: true,
    },
    Password:{
        type:String
    },
    joiningDate:{
        type:Date,
        default:Date.now,
    }
})

module.exports = mongoose.model("User",UserSchema);