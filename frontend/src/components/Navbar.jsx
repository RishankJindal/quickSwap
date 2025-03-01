import React from 'react'
import { Profile } from './Profile'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='w-full h-70 flex items-center justify-between p-3'>
        <h2 className='text-white font-semibold text-5xl  '><span className='text-[#ffe01a]'>Quick</span>Swap</h2>
        <NavLink />
        <Profile />
    </div>
  )
}
