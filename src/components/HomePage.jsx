import React from 'react'
import { useAuth } from '../contexts/AuthContext/index'

const HomePage = () => {
    const { currentUser } = useAuth()
    return (
      currentUser ? 
        <div className='text-2xl font-bold pt-14'>Hello {currentUser?.displayName ? currentUser?.displayName : currentUser?.email}, you are now logged in.</div> :
        <div className='text-2xl font-bold pt-14'>Please Login</div>
    )
}

export default HomePage