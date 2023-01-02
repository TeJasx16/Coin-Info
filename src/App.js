import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Navbar from './compo/Navbar'
import Home from './compo/Home'
import Coins from './compo/Coins'
import About from './compo/About'
import Exchanges from './compo/Coins'
const App = () => {
  return (
    <>

    <Router>
      <Navbar/>
      <Routes>

      <Route path='/' element={ <Home/> }/>
      <Route path='/Exchanges' element={ <Exchanges/> }/>
      <Route path='/Coins' element={ <Coins/> }/>
      <Route path='/About' element={ <About/> }/>
      
      <Route path='*' element={ <> <h1 className='text-4xl  font-bold text-center text-red-700  flex flex-col justify-center items-center h-[80vh] w-full'>404 <p className='text-2xl text-black no-underline'> Page Not Found </p></h1>  </> }/>

      </Routes>
    </Router>
    
    </>
  )
}

export default App