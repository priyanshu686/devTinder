const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const User = require("../Models/UserModel");
const {emailcheck} = require("../utils/validate_Email");
require('dotenv').config();




const getdata = async (req, res) => {
  try {
    const alluser = await User.find();
    res.send(alluser);
  } catch (err) {
    console.error(err.message);
  }
};


const getdatabyemail = async (req, res) => {
    // const email = req.params.email;
    try {
      const {_id,firstName,lastName,email,TechnicalSkills} = req.userdata;
      // const user = await User.findOne({ email: email });
      // console.log(User1);
      res.send({
        _id,
        firstName,
        lastName,
        email,
        TechnicalSkills
      });
    } catch (err) {
      res.status(400).send("Something is Wrong");
    }
  };




const deleteData = async (req, res) => {
  const {email} = req.userdata;
  try {
    const deletedata = await User.findOneAndDelete({ email: email });
    if (!deletedata) {
      res.status(404).send("User Not Found");
    }
    res.send("Data Deleted");
  } catch (err) {
    res.status(400).send("Something is Wrong in delete");
  }
};


const updatePassword = async(req,res)=>{
    const data = req.userdata;
    const{Password} = req.body;
    try{
      if(!validator.isStrongPassword){
        throw new Error("Please Give Strong Password");
      }
      const check = await bcrypt.compare(Password,data.Password);
      if(check){
        throw new Error("Please Use Another Password");
      }
      const PasswordHashed = await bcrypt.hash(Password,10);
      data.Password = PasswordHashed;
      await data.save();
      res.send("Password Updated");
    }catch(err){
      res.status(401).send("ERROR: "+ err.message);
    }
  }


const updatedata = async (req, res) => {
  const data = req.userdata;
  const update = req.body;
  try {
    const Allowed_Update = ["lastname", "DOB", "TechnicalSkills","gender"];
    const check = Object.keys(update).every((k) =>
         Allowed_Update.includes(k)
    );
    if (!check) {
      throw new Error("Data is insufficent for update")
    }
    if(data?.TechnicalSkills.length > 10){
      throw new Error("Skills should be not more then 10");
    }
    Object.keys(update).forEach((k)=>data[k] = update[k]);
    await data.save();
    res.send("Data Updated");
  } catch (err) {
    res.status(401).send(err.message);
  }
};




module.exports = {getdata, getdatabyemail, updatedata, deleteData ,updatePassword}; 