import React from 'react'
import { useSelector } from 'react-redux'
import EditProfile from './EditProfile'

const Profile = () => {
    const user = useSelector((store)=>store.user)
    console.log(user);
  return (
    user && 
    <div>
      <EditProfile user={user.data}/>
    </div>
  )
}

export default Profile
