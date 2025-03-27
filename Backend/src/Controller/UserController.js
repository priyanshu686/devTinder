const User = require('../Models/UserModel');

const adddata = async(req,res)=>{

    // Static Data Entry
    // const user = new User({
    //     firstName:"Priyanshu",
    //     lastName:"Bindal",
    //     email:"bindalpriyanshu6@gmail.com",
    //     DOB: new Date(2003,11,15),
    //     Password:"Bindal@123"
    // })

    const user = new User(req.body);


    try{
        await user.save();
        await res.send("Data Added Successfully")
    }catch(err){
        console.error(err.message);
    }
}


const getdata = async(req,res)=>{
    try{
        const alluser = await User.find();
        res.send(alluser);
    }catch(err){
        console.error(err.message);
    }
}


module.exports = {adddata,getdata};