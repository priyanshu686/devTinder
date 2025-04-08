const ConnectionRequest = require('../Models/ConnectionRequestModel');
const User = require('../Models/UserModel');

const GetConnection = async(req,res) => {
    const UserID = req.userdata._id;
    const Connections = await ConnectionRequest.find({
        ToUserId:UserID,
        Status:"Interested"
    }).populate("FromUserId","firstName lastName email DOB gender TechnicalSkills");
    if(!Connections){
        res.json({message:"No Request Found"})
    }
    try{
        res.json({
            message:"All Connections",
            data:Connections
        })
    }catch(err){
        res.status(400).send("ERROR: " + err.message);
    }
}

const checkfriend = async(req,res)=>{
    const logged = req.userdata._id;
    try{
        const Connection = await ConnectionRequest.find({
            $or:[
                {FromUserId:logged , Status:"Accepted"},
                {ToUserId:logged , Status:"Accepted"}
            ],
        })
        .populate("FromUserId" , "firstName lastName email DOB gender TechnicalSkills")
        .populate("ToUserId","firstName lastName email DOB gender TechnicalSkills")
        if(!Connection){
            throw new Error("No Friend Found");
        }
        const data = Connection.map((row)=>{
            if(row.FromUserId._id.equals(logged._id)){
                return row.ToUserId;
            }
            else{
                return row.FromUserId;
            }
        })
        res.json({
            message:"All Friends Data",
            data: data
        })
    }catch(err){
        res.status(400).send("ERROR: " + err.message);
    }
}


const feed = async(req,res)=>{
    try{
        const logged = req.userdata;
        const connected = await ConnectionRequest.find({
            $or:[
                {FromUserId:logged._id},
                {ToUserId:logged._id}
            ]
        }).select("FromUserId ToUserId");
        const removingids = new Set();
        await connected.forEach((d)=>{
            removingids.add(d.FromUserId),
            removingids.add(d.ToUserId)
        }
        )
        const data = await User.find({
            $and:[
                {_id: {$nin: Array.from(removingids)}},
                {_id:{$ne:logged._id}}
            ]
        }).select("firstName lastName email DOB gender TechnicalSkills");
        res.send(data);
        
    }catch(err){
        res.status(400).send("ERROR: "+ err.message);
    }
}

module.exports = {
    GetConnection,
    checkfriend,
    feed
}