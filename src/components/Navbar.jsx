import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext/index'
import { doSignOut } from '../firebase/auth'
const Navbar = () => {
  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()
  return (
    <header>
      <nav className='w-full flex justify-between items-center'>
        <Link to='/' className='text-3xl tracking-tight font-bold'>Logo</Link>
        {
          userLoggedIn ? <div className='flex gap-3 items-center text-lg font-bold cursor-pointer'>
              <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className=''>Logout</button>
          </div> 
          : 
          <div className='flex gap-3 items-center text-lg font-bold cursor-pointer'>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </div>
        }
        
      </nav>
    </header>
  )
}

export default Navbar