const ConnectionRequest = require('../Models/ConnectionRequestModel');

const CreateConnection = async(req,res)=>{
    const UserId = req.userdata._id;
    const ToId = req.params.id;
    const Status = req.params.status;
    try {
        const Connect = new ConnectionRequest({
            FromUserId : UserId,
            ToUserId : ToId,
            Status
        })

        const Check = await Connect.save();
        res.send("Request Send");

        
    } catch (err) {
        res.status(400).send("ERROR: " + err.message);
    }
}


module.exports = {CreateConnection}