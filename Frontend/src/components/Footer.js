import React from 'react'
import logo from '../assets/logo.jpg'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
  return (
        <div className='px-20 pt-[60px] pb-[19px] border-y-[1px] border-[#E4E4E4] bg-[#FEFEFE] flex items-center justify-between'>
            <div className='w-[270px]'>
                <img src={logo} className='h-[90px] w-[full] cursor-pointer' />
                <p className='mb-0 text-[14px] text-[#565656] text-left'>
                Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.
                </p>
            </div>
            <div className='flex items-center justify-between gap-[40px] text-center'>
                <div>
                    <p className='text-[20px] text-[black] font-[500] mb-[26px]'>Our Products</p>
                    <p className='mb-0 text-[16px] m-2 cursor-pointer text-[black] font-[400]'>Romson</p>
                    <p className='mb-0 text-[16px] m-2 cursor-pointer text-[black] font-[400]'>Romson</p>
                    <p className='mb-0 text-[16px] m-2 cursor-pointer text-[black] font-[400]'>Romson</p>
                    <p className='mb-0 text-[16px] m-2 cursor-pointer text-[black] font-[400]'>Romson</p>
                    
                </div>
                <div>
                    <p className='text-[20px] text-[black] font-[500] mb-[26px]'>Quick Links</p>
                    <p onClick={()=>navigate('/')} className='mb-0 text-[16px] m-2 cursor-pointer text-[black] font-[400]'>Home</p>
                    <p onClick={()=>navigate('/products')} className='mb-0 text-[16px] m-2 cursor-pointer text-[black] font-[400]'>Products</p>
                    <p onClick={()=>navigate('/about')} className='mb-0 text-[16px] m-2 cursor-pointer text-[black] font-[400]'>About</p>
                    <p onClick={()=>navigate('/contact')} className='mb-0 text-[16px] m-2 cursor-pointer text-[black] font-[400]'>Contact</p>
                    
                </div>

            </div>

      
    </div>
  )
}

export default Footer
