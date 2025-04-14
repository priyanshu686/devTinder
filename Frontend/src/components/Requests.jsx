import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Requests = () => {
    const [requests,setRequests] = useState("");
    const fetchRequest = async()=>{
        const res = await axios.get("http://localhost:7777/user/Connection",{withCredentials:true});
        // console.log(res?.data?.data);
        setRequests(res?.data?.data);
    }
    useEffect(()=>{
        fetchRequest();
    })
    if(!requests) return <div>Loading.....</div> ;
    if(requests.length === 0) return (
        <div>
            No Requests
        </div>
    );
  return (
    <div>
      {requests.map((items) => (
        <div key={items._id}>
          <h1>
            {items.firstName} {items.lastName}
          </h1>
        </div>
      ))}
    </div>
  )
}

export default Requests
