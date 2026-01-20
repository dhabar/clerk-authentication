import React from 'react'
import {  Route, Routes } from 'react-router'
import Home from './pages/Home'
import Products  from "./pages/Products";
import About  from "./pages/About";
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Mobile from './components/Mobile-menu';
import Navbar from './components/Navbar';
import Signin  from './pages/SignIn';




const App = () => {
  return (
    <div >
        <Navbar/>
        <Mobile/>
        <div className='pt-20 px-4'>
      <Routes>
        <Route path='sign-in/*' element={<Signin />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/contact' element={<Contact />} />
        

      </Routes></div>
    </div>
  )
}

export default App
