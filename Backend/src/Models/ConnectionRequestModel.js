const mongoose = require('mongoose');
const UserModel = require('./UserModel');

const ConnectionRequestSchema = new mongoose.Schema({
    FromUserId:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref: UserModel
    },
    ToUserId:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref: UserModel
    },
    Status:{
        type:String,
        enum:{
            values:["Interested","Ignore","Accepted","Rejected"],
            message:`{value} is not valid input`
        }
    }
},{
    timestamps:true
})


ConnectionRequestSchema.index({FromUserId:1 ,ToUserId:1},{unique:true});

ConnectionRequestSchema.pre("save",function(next){
    if(this.FromUserId.equals(this.ToUserId)){
        throw new Error("Both Sender and Recevier is same");
    }
    next();
})



const ConnectionRequestModel = new mongoose.model('ConnectionRequest',ConnectionRequestSchema);

module.exports = ConnectionRequestModel;