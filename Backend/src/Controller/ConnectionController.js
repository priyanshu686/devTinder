const ConnectionRequest = require('../Models/ConnectionRequestModel');

const CreateConnection = async(req,res)=>{
    const UserId = req.userdata._id;
    const ToId = req.params.id;
    const Status = req.params.status;
    const allowed_Status = ["Interested","Ignore"];
    const checkStatus = allowed_Status.includes(Status);
    if(!checkStatus){
        throw new Error("Status is invalid"); 
    }
    const checkId = await ConnectionRequest.findOne({
        $or:[
            {   FromUserId:UserId ,
                ToUserId:ToId},
            {
                FromUserId:ToId,
                UserId:UserId   
            }
        ]
    })
    console.log(checkId);
    if(checkId){
        return res.status(401).send("Request Already Created");
    }
    try {
        const Connect = new ConnectionRequest({
            FromUserId : UserId,
            ToUserId : ToId,
            Status
        })
        await Connect.save();
        res.send("Request Send"); 
    } catch (err) {
        res.status(400).send("ERROR: " + err.message);
    }
}


module.exports = {CreateConnection}