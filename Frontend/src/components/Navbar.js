import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { useNavigate } from 'react-router-dom'

const Navbar = ({active,setactive}) => {


    const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between px-[45px] py-[35px]'>
        <div onClick={()=>navigate('/')}>
            <img src={logo} className='h-[90px] w-[full] cursor-pointer' />
        </div>
        <div className='flex items-center justify-center gap-[49px]'>
            <p className={` mb-0 cursor-pointer text-[20px]  ${active === 'home' ? "text-[#2639ED]" : "text-[black]" }  font-[500]`} onClick={()=>{setactive('home');navigate('/')}}>Home</p>
            <p className={` mb-0 cursor-pointer text-[20px]  ${active === 'products' ? "text-[#2639ED]" : "text-[black]" }  font-[500]`} onClick={()=>{setactive('products');navigate('/products')}}>Our Products</p>
            <p className={` mb-0 cursor-pointer text-[20px]  ${active === 'about' ? "text-[#2639ED]" : "text-[black]" }  font-[500]`} onClick={()=>{setactive('about');navigate('/about')}}>About Us</p>
            <p className={` mb-0 cursor-pointer text-[20px]  ${active === 'contact' ? "text-[#2639ED]" : "text-[black]" }  font-[500]`} onClick={()=>{setactive('contact');navigate('/contact')}}>Contact</p>
            <p className={` mb-0 cursor-pointer text-[20px]  ${active === 'addproducts' ? "text-[#2639ED]" : "text-[black]" }  font-[500]`} onClick={()=>{setactive('addproducts');navigate('/add-products')}}>Add Products</p>

        </div>
      
    </div>
  )
}

export default Navbar
