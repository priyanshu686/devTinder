const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const validator = require("validator");
const User = require("../Models/UserModel");
const { emailcheck } = require("../utils/validate_Email");
require("dotenv").config();







const adddata = async (req, res) => {
  // Static Data Entry
  // const user = new User({
  //     firstName:"Priyanshu",
  //     lastName:"Bindal",
  //     email:"bindalpriyanshu6@gmail.com",
  //     DOB: new Date(2003,11,15),
  //     Password:"Bindal@123"
  // })
  const filename = req.file.filename;
  const fullUrl = `http://localhost:3000/uploads/${filename}`;
  console.log(fullUrl)


  const { firstName, lastName, email, DOB, gender, Password, TechnicalSkills } =
    req.body;
  try {
    if (TechnicalSkills.length > 10) {
      throw new error("Skills should be not more then 10");
    }
    const passwordhash = await bcrypt.hash(Password, 10);
    const user = new User({
      photoUrl:fullUrl,
      firstName,
      lastName,
      email,
      DOB,
      gender,
      Password: passwordhash,
      TechnicalSkills,
    });
    await user.save();
    res.send("Data Added Successfully");
  } catch (err) {
    console.error(err.message);
  }
};

const login = async (req, res) => {
  try {
    emailcheck(req);
    const { email, Password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      const check = await bcrypt.compare(Password, user.Password);
      if (check) {
        const token = await jwt.sign(
          { _id: user._id },
          process.env.JWT_SECRET_KEY
        );
        res.cookie("token", token);
        // console.log(req.cookies);
        const data = await User.findOne({ email: email }).select("firstName lastName TechnicalSkills gender DOB email")
        res.json({ message: "Login Successful", data: data });
      } else {
        throw new Error("Invalid Password");
      }
    } else {
      throw new Error("No user Registered");
    }
  } catch (err) {
    res.status(400).send("Something is Wrong in Login : " + err.message);
  }
};

module.exports = { adddata, login };
