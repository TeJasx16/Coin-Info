import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

<header className=" bg-white  font-serif  flex  items-center top-0 sticky z-10 body-font shadow-lg ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-around  ">
    <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 font-mono text-3xl left-1 md:absolute text-purple-500 ">COIN-INFO</span>
    </Link>
    <nav className=" flex  items-center  md:justify-center">
      <Link to={'/'} className="md:mr-5 mr-3 text-base md:text-xl hover:text-purple-400">Home</Link>
      <Link to={'/Exchanges'} className="md:mr-5 mr-3 text-base md:text-xl hover:text-purple-400">Exchanges</Link>
      <Link to={'/Coins'} className="md:mr-5 mr-3 text-base md:text-xl hover:text-purple-400">Coins</Link>
      <Link to={'/About'} className="md:mr-5 mr-1 text-base md:text-xl hover:text-purple-400">About</Link>
      
    </nav>
   
 
  </div>
</header>
    
    
    </>
  )
}

export default Navbar