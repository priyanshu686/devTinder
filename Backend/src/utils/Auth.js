const User = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userAuth = async(req,res,next)=>{
    try{
        const {token} = req.cookies;
    if(!token){
        throw new Error("Token is Invalid")
    }
    else{
        const {_id} = await jwt.verify(token,process.env.JWT_SECRET_KEY);
        // console.log(decoded);
        const user = await User.findById(_id);
        if(!user){
            throw new Error("User is not Present");
        }
        req.userdata = user;
        next(); 
    }
    }catch(err){
        res.status(401).send("ERROR: "+err.message);
    }
}


module.exports = {userAuth};