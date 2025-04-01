const User = require("../Models/UserModel");

const adddata = async (req, res) => {
  // Static Data Entry
  // const user = new User({
  //     firstName:"Priyanshu",
  //     lastName:"Bindal",
  //     email:"bindalpriyanshu6@gmail.com",
  //     DOB: new Date(2003,11,15),
  //     Password:"Bindal@123"
  // })
  const data = req.body;
  try{
    if(data?.TechnicalSkills.length > 10){
        throw new error ("Skills should be not more then 10");
    }
    const user = new User(data);
    await user.save();
    res.send("Data Added Successfully");
  } catch (err) {
    console.error(err.message);
  }
};

const getdata = async (req, res) => {
  try {
    const alluser = await User.find();
    res.send(alluser);
  } catch (err) {
    console.error(err.message);
  }
};

const getdatabyemail = async (req, res) => {
  const email = req.params.email;
  try {
    const user = await User.findOne({ email: email });
    res.send(user);
  } catch (err) {
    res.status(400).send("Something is Wrong");
  }
};

const updatedata = async (req, res) => {
  const email = req.params.email;
  const data = req.body;
  try {
    const Allowed_Update = ["lastname", "DOB", "TechnicalSkills", "Password","gender"];
    const check = Object.keys(data).every((k) =>
         Allowed_Update.includes(k)
    );
    if (!check) {
        throw new error("Data is insufficent for update")
    }
    if(data?.TechnicalSkills.length > 10){
        throw new error ("Skills should be not more then 10");
    }
    await User.findOneAndUpdate({ email: email }, data, {
      runValidators: true,
    });
    res.send("Data Updated");
  } catch (err) {
    console.log(err.message);
  }
};

const deleteData = async (req, res) => {
  const email = req.params.id;
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

module.exports = { adddata, getdata, getdatabyemail, updatedata, deleteData };
