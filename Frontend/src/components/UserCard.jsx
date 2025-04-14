import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeonedata} from "../utils/FeedSlice"
import { useNavigate } from "react-router";

const UserCard = ({ user }) => {
  // console.log(user)
  const { _id, firstName, lastName, TechnicalSkills, gender, age } = user;
  // console.log(TechnicalSkills)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIntersted = async () => {
    const res = await axios.post(
      "http://localhost:7777/connection/request/Interested/" + _id,
      {},
      { withCredentials: true }
    );
    dispatch(removeonedata(_id));
    navigate('/feed')
    console.log(res);
  };

  const handleIgnore = async()=>{
    const res = await axios.post(
      "http://localhost:7777/connection/request/Ignore/" + _id,
      {},
      { withCredentials: true }
    );
    dispatch(removeonedata(_id));
    navigate('/feed')
  }

  if(user === null) {
    return <div className="flex justify-center mt-9">No User Found</div>;
  }
  return (
    user && (
      <div className="flex justify-center mt-9">
        <div className="card bg-base-100 w-96 h-96 shadow-sm">
          <figure>
            <img
              className="w-40"
              src="https://th.bing.com/th/id/OIP.F_R5vSp2LEiLzJqaQuB99wAAAA?rs=1&pid=ImgDetMain"
              alt="Photo"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {firstName} {lastName}
            </h2>
            <h4>
              {age} {gender}
            </h4>
            <p> Technical Skills - {TechnicalSkills}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={handleIntersted}>Intersted</button>
              <button className="btn btn-secondary" onClick={handleIgnore}>Ignore</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserCard;
