import React from 'react'
import { Link } from 'react-router-dom'
import { GiGoat } from "react-icons/gi";


const Logo = () => {
  return (
    <>
       <Link to={'/'} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0  p-2 rounded-lg">
            <span className='text-2xl font-bold p-5 rounded-full bg-blue-500'>
                <GiGoat/>
            </span>
            <span class="ml-3 mt-1 text-xl font-bold">E com</span>
        </Link>
    </>
  )
}

export default Logo
