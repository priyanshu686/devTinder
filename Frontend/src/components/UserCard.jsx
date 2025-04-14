import React from "react";
import { useSelector } from "react-redux";

const UserCard = ({user}) => {
  // console.log(user)
    const{firstName ,lastName,TechnicalSkills,gender,age } = user
    // console.log(TechnicalSkills)
    
  return (
    user &&
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
          <h4>{age} {gender}</h4>
          <p> Technical Skills - {TechnicalSkills}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Intersted</button>
            <button className="btn btn-secondary">Ignore</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default UserCard;
