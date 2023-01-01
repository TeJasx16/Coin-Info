import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Navbar from './compo/Navbar'
import Home from './compo/Home'
import Coins from './compo/Coins'
import About from './compo/About'
const App = () => {
  return (
    <>

    <Router>
      <Navbar/>
      <Routes>

      <Route path='/' element={ <Home/> }/>
      <Route path='/Coins' element={ <Coins/> }/>
      <Route path='/About' element={ <About/> }/>
      
      <Route path='*' element={ <> <h1>404</h1> </> }/>

      </Routes>
    </Router>
    
    </>
  )
}

export default App