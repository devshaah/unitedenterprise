import React from "react";
import ContactForm from "../components/ContactForm";
import {AiFillMail} from 'react-icons/ai'
import{BsFillTelephoneFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
// import axios from 'axios'

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
              Shop no. 3, Dharam Pratap CHS, Damodar Wadi, Ashok Nagar, Kandivali (East), Mumbai - 400101.
            </div>
            <div className="flex gap-[10px]  items-center">
              <AiFillMail size={22} className="text-[#2639ED]"/>

              <div className="text-lg font-[600]">Email</div>
            </div>
            <div className=" text-[#565656]">unitedenterprise2022@email.com</div>
            <div className="flex gap-[10px]  items-center">
              <BsFillTelephoneFill size={22} className="text-[#2639ED]"/>

              <div className="text-lg font-[600]">Contact Information</div>
            </div>
            <div className="flex flex-col text-[#565656]">
              <div>+91 87799 60482</div>
              {/* <div>12234567890</div> */}
            </div>
            <div className="flex gap-[16px]">
              <div ><a href="https:/wa.me/7715027917"> <BsWhatsapp size={30} className="text-[#3B5998]"/></a></div>
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
