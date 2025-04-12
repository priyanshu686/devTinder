import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../utils/userSlice";

const Body = () => {
  const [error , setError] = useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user)
  const fetchdata = async() => {
    try {
      if(user) return ;  // if user is already present in redux store then no need to fetch data again
      const res = await axios.get("http://localhost:7777/profile/info", { withCredentials: true });
      dispatch(setUser(res.data));
      // console.log(res.data)
      return navigate("/feed");
    } catch (err) {
      if(err.response.status === 401) {
        setError(err.response.data);
        return navigate("/")
      }
      setError(err.message);
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchdata();
  }, [user]);
  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Body;
