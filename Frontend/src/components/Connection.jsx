import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const Connection = () => {
    const navigate = useNavigate();
    const handleFriends = () => {
        navigate('/connection/friends')
    }
    const handleRequests = () =>{
        navigate('/connection/requests')
    }
  return (
    <div className='text-center'>
        <button className='btn btn-primary' onClick={handleFriends}>Friends</button>
        <button className='btn btn-primary' onClick={handleRequests}>Requests</button>
        <Outlet/>
    </div>
  )
}

export default Connection
