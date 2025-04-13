import React, { useEffect, useState, } from "react";
import Validation from "../utils/LoginValidation";
import axios from "axios";
import { useDispatch , useSelector } from "react-redux";
import {setUser} from '../utils/UserSlice';
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setemail] = useState("bindalpriyanshu6@gmail.com");
  const [Password, setpassword] = useState("Bindal@123");
  const [check, setcheck] = useState(false);
  const Data = useSelector((state) => state.user);
  const Dispatch = useDispatch();
  const navigator = useNavigate();
  const onClickHandler = async () => {
    if (Validation(email, Password) != null) {
      setcheck(Validation(email, Password));
    } else {
      setcheck(false);
      const data = {
        email,
        Password,
      };
      // console.log(data)
      ;
      try {
        const res = await axios.post(
          'http://localhost:7777/auth/login',
          data,
          {withCredentials:true}
        );
        // console.log(res.data);
        Dispatch(setUser(res.data));
        navigator("/feed");
        // console.log(Data);

      } catch (err) {
        console.log(err);
        setcheck(err.response.data);
      }
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="card card-border bg-base-200 w-96 ">
        <div className="card-body">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              value={email}
              className="input input-primary"
              placeholder="Enter Your Email"
              onChange={(e) => setemail(e.target.value)}
            />
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              className="input input-ghost"
              value={Password}
              placeholder="Enter Your Password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </fieldset>
          <div className="card-actions justify-center">
            <button className="btn btn-primary " onClick={onClickHandler}>
              Submit
            </button>
          </div>
          {check && (
            <div className="alert alert-error shadow-lg mt-4">
              <div>
                <span>{check}</span>
              </div>
            </div>
          )}
          <div>
            <p className="text-center">Don't have an account?</p>
            <Link to = "/signup" className="btn btn-link">
              Sign Up 
            </Link>
            {/* <p>{JSON.stringify(Data)}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
