const mongoose = require('mongoose');

const ConnectionRequestSchema = new mongoose.Schema({
    FromUserId:{
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    ToUserId:{
        type: mongoose.Schema.Types.ObjectId,
        require:true
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


const ConnectionRequestModel = new mongoose.model('ConnectionRequest',ConnectionRequestSchema);

module.exports = ConnectionRequestModel;