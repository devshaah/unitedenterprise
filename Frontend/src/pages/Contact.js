import React from "react";
import ContactForm from "../components/ContactForm";
import {AiFillMail} from 'react-icons/ai'
import{BsFillTelephoneFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import axios from 'axios'

const Contact = () => {

  


  return (
    <div className="w-full">
      <div className="  flex flex-col bg-[#FEFEFE]  justify-start ">
        <p className=" py-[34px] px-[118px] text-[40px] bg-[#F4F9FF] w-full font-[600]">Contact Us</p>
        <div className="flex px-[118px] py-[90px] gap-[60px]">
          <div className="pt-[30px] items-start justify-start flex flex-col gap-5">
            <div className="text-[40px] font-[600]"> United Enterprise</div>
            <div className="flex gap-[10px]  items-center">
              <MdLocationOn size={22} className="text-[#2639ED]"/>

              <div className="text-lg font-[600]">Address</div>
            </div>
            <div className=" text-[#565656]">
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </div>
            <div className="flex gap-[10px]  items-center">
              <AiFillMail size={22} className="text-[#2639ED]"/>

              <div className="text-lg font-[600]">Email</div>
            </div>
            <div className=" text-[#565656]">email@email.com</div>
            <div className="flex gap-[10px]  items-center">
              <BsFillTelephoneFill size={22} className="text-[#2639ED]"/>

              <div className="text-lg font-[600]">Contact Information</div>
            </div>
            <div className="flex flex-col text-[#565656]">
              <div>12234567890</div>
              <div>12234567890</div>
            </div>
            <div className="flex gap-[16px]">
              <div > <BsFacebook size={30} className="text-[#3B5998]"/></div>
              <div> <BsTwitter size={30} className=" text-[#55ACEE]"/> </div>
              <div > <BsLinkedin size={30} className="rounded-full text-[#007AB9]"/></div>

            

            </div>
          </div>
          <div className="w-[589px] border-2 h-[549px]">map</div>
        </div>
        <div className="flex justify-center ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
