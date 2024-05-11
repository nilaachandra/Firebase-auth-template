import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='w-full py-4 px-56'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout