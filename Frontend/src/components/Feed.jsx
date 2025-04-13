import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setfeed } from '../utils/FeedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const Dispatch = useDispatch();
  const data = useSelector((state)=>state.feed)

  const feed = async()=>{
    const res = await axios.get("http://localhost:7777/user/feed",{withCredentials:true});
    Dispatch(setfeed(res.data.data))
  }

  useEffect(()=>{
    feed();
  },[])

  if (!data || data.length === 0) return null;
  // console.log(data)
  return (
    data && 
    <div>
      <UserCard user={data[0]}/>
    </div>
  )
}

export default Feed ; 
