import React, { useState } from "react";
import {useNavigate} from "react-router";
import validation from "../utils/LoginValidation";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setgender] = useState("");
  const [Password, setPassword] = useState("");
  const [TechnicalSkills, setTechnicalSkills] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleClick = async()=>{
    try{
      if(validation(email,Password) != null){
        throw new Error(validation(email))
      }
      const newArray = TechnicalSkills.split(",").map((skill) => skill.trim());
      const res = await axios.post("http://localhost:7777/auth/signup",{
        firstName,
        lastName,
        email,
        DOB,
        gender,
        Password,
        TechnicalSkills:newArray
      },{withCredentials:true})

      console.log(res);
      navigate("/");

    }catch(err){
      setCheck(err.message);
      console.log("Error: " + err.message)
    }
  }
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 card-xl shadow-sm">
        <div className="card-body">
          <div>
            <label>FirstName:</label>
            <input
              className="input "
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <br />
            <label>LastName:</label>
            <input
              className="input "
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
            <br />
            <label>Email:</label>
            <input
              className="input "
              type="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <br />
            <label>Date Of Birth:</label>
            <input
              className="input "
              type="date"
              value={DOB}
              onChange={(e) => {
                setDOB(e.target.value);
              }}
            />
            <br />
            <label>Select Gender: </label>
            <br />
            <select
              id="gender"
              value={gender}
              onChange={(e) => {
                setgender(e.target.value);
              }}
            >
              <option value="">--Select--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Non-binary</option>
              {/* Add more if needed */}
            </select>
            <br />
            <label>Password:</label>
            <input
              className="input "
              type="password"
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <label>Technical Skills (comma-separated):</label>
            <input
            className="input"
              type="text"
              value={TechnicalSkills}
              onChange={(e)=>{setTechnicalSkills(e.target.value)}}
            />
          </div>
          <div className="justify-end card-actions">
            <button className="btn btn-primary" onClick={handleClick}>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
