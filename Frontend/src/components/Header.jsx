import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from './UI/Logo';



const Header = () => {
  return (
    <>
      <header class="bg-gray-100 body-font shadow-2xl rounded-lg">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo/>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to={'/'} class="mr-5 text-xl font-bold hover:text-gray-900">Home</Link>
            <Link to={'/'} class="mr-5 text-xl font-bold hover:text-gray-900">About</Link>
            <Link to={'/login'} class="mr-5 text-xl font-bold hover:text-gray-900">Log in</Link>
          </nav>
          <Link to={'/cart'} class="inline-flex items-center bg-blue-600 rounded-full p-5 focus:outline-none  md:mt-0">
              <span className='text-xl text-black'>
                  <FaShoppingCart/>
              </span>
          </Link>
        </div>
      </header>

    </>
  )
}

export default Header
