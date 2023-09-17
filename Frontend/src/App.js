import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddProducts from './pages/AddProducts';
import React, { useState } from 'react'

function App() {
  const [active,setactive] = useState('home')
  return (
    <div className="">
      <Router>
      <Navbar active={active} setactive={setactive}/>
        <Routes>
          <Route exact path="/" element={<Home setactive={setactive}/>} />
          <Route exact path="/products" element={<Product/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/add-products" element={<AddProducts/>} />
        </Routes>
      <Footer/>
      <p className='m-2 text-[#A4a4a4] text-[16px] text-center'>Copyright © 2023 United Enterprise</p>
      </Router>
      
    </div>
  );
}

export default App;
