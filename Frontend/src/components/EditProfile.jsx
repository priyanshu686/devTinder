import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/UserSlice";
import UserCard from "./UserCard";

const EditProfile = ({ user }) => {
  // console.log(user)
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const formatDate = (date) => {
    if (date && !isNaN(new Date(date).getTime())) {
        return new Date(date).toISOString().split('T')[0];
      }
      return '';
  };
  
  const [DOB, setDob] = useState(formatDate(user.DOB))
  const [TechnicalSkills, setSkills] = useState(user.TechnicalSkills); // string for input
  const [gender, setGender] = useState(user.gender);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const payload = {
        firstName: firstName,
        lastName: lastName,
        DOB: DOB,
        gender: gender,
        TechnicalSkills: TechnicalSkills, // back to array
      };

      const res = await axios.patch("http://localhost:7777/profile/update", payload, {
        withCredentials: true,
      });
      // console.log(res)
      dispatch(setUser(res.data));
      console.log(res);
      setErrorMessage(""); // Clear any previous error
    } catch (err) {
      console.error(err);
      setErrorMessage(err?.response?.data || "Something went wrong");
    }
  };

  const isFormValid = firstName && lastName && DOB && gender && TechnicalSkills;

  return (
    <div className="flex justify-center my-10">
    <div className="flex justify-center mr-10">
      <div className="card card-border bg-base-200 w-96 py-10">
        <div className="card-body">
          <fieldset className="fieldset space-y-4">
            <legend className="fieldset-legend">First Name</legend>
            <input
              type="text"
              value={firstName}
              className="input input-primary"
              onChange={(e) => setFirstName(e.target.value)}
            />

            <legend className="fieldset-legend">Last Name</legend>
            <input
              type="text"
              value={lastName}
              className="input input-ghost"
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
            />

            <legend className="fieldset-legend">Date of Birth</legend>
            <input
              type="date"
              value={DOB}
              className="input input-ghost"
              onChange={(e) => setDob(e.target.value)}
            />

            <legend className="fieldset-legend">Technical Skills</legend>
            <input
              type="text"
              value={TechnicalSkills}
              className="input input-ghost"
              placeholder="e.g. HTML, CSS, React"
              onChange={(e) => setSkills(e.target.value)}
            />

            <legend className="fieldset-legend">Gender</legend>
            <div className="dropdown dropdown-center">
              <div tabIndex={0} role="button" className="btn m-1">
                {gender || "Select Gender"}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li><a onClick={() => setGender("Male")}>Male</a></li>
                <li><a onClick={() => setGender("Female")}>Female</a></li>
                <li><a onClick={() => setGender("Other")}>Other</a></li>
              </ul>
            </div>
          </fieldset>

          {errorMessage && (
            <div className="alert alert-error shadow-lg mt-4">
              <div>
                <span>{errorMessage}</span>
              </div>
            </div>
          )}

          <div className="card-actions justify-center mt-4">
            <button
              className="btn btn-primary"
              onClick={handleClick}
              disabled={!isFormValid}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      
    </div>
    <UserCard user= {{firstName , lastName ,TechnicalSkills, gender,DOB}}/>
    </div>
  );
};

export default EditProfile;
