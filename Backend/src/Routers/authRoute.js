const express = require('express');
const multer = require("multer");
const path = require("path");
const fs = require("fs")
const { adddata,login} = require('../Controller/authController');

const route = express.Router();

route.use('/signup',express.static("Uploads"));


const uploadDir = path.join(__dirname, "../Uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}


const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  const upload = multer({ storage })
route.post('/signup',upload.single("photo"),adddata);
route.post('/login',login);
// route.get('/info',getdata);
route.post('/logout',(req,res)=>{
    res.cookie('token',null,{
        expires: new Date(Date.now())
    }).send("Logout Succesful")
})


module.exports = route;