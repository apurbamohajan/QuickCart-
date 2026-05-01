import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'

const Navbar = () => {

  const { router } = useAppContext()

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
      {/* Quickmart Logo */}
      <div 
        className="cursor-pointer text-2xl md:text-3xl font-extrabold tracking-tight"
        onClick={() => router.push("/")}
      >
        <span className="text-red-600">Quick</span>
        <span className="text-gray-900">mart</span>
      </div>
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar