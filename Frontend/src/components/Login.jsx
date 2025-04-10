import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="card card-border bg-base-200 w-96 ">
        <div className="card-body">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Email"
            />
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Password"
            />
          </fieldset>
          <div className="card-actions justify-center">
            <button className="btn btn-primary ">Submit</button>
          </div>
          <div>
            <p className="text-center">Don't have an account?</p>
            <button
              className="btn btn-link"
              // onClick={() => (window.location.href = "")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
