import React from 'react'
import img from '../assets/image 8.png'
const About = () => {
  return (
    <div>
       <div className='bg-[#F4F9FF] px-20 flex items-center justify-start py-[35px]' >
          <p className='mb-0 text-[40px] font-[600]'>About Us</p>
      </div>
      <div className='px-20 pt-[35px] pb-[89px] grid grid-cols-[55%_35%] items-center justify-start gap-[50px]'>
        <div>
          <img src={img} className='w-full'/>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='mb-[34px] text-[40px] text-[] font-[600]'>United Enterprise</p>
            <p className='mb-[34px] text-[15px] text-[#565656] font-[400]'>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
        </div>

      </div>
    </div>
  )
}

export default About
