import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from 'react-router'

const Body = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body
