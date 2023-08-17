import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      <div className='bg-[#F4F9FF] px-20 flex flex-col  justify-start py-[35px]' >
          <p className='mb-0 text-[40px] font-[600]'>Contact Us</p>
          <div className='flex justify-center'>
          <ContactForm/>
          </div>
          

      </div>
    </div>
  )
}

export default Contact
