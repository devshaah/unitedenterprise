import React, { useState } from 'react'
import ProductForm from '../components/ProductForm'
import { AiOutlineEye } from 'react-icons/ai';

const AddProducts = () => {

    const [password,setpassword] = useState("")
    const [allow,setallow] = useState(false)
    const [view,setview] = useState(false)
    const [err,seterr] = useState(false)

    const checkpassword =  () => {
        console.log("password")
        console.log(password)
        if ( password === "united")
        {
            setallow(true)
        }
        else {
            seterr(true)
        }
    }
  return (
    <div className='flex items-center justify-center h-full w-full py-[100px]'>
        {
        allow 
        ?
        <div className='w-full'>
            <ProductForm/>
        </div>
        :
        <div className='flex flex-col items-center justify-center bg-[#F4F9FF] w-fit px-20 py-10 gap-[20px] rounded-[20px] '>
            <div className='flex items-center justify-center gap-[10px]'>
        <input type={view ? 'text' : 'password'} placeholder='Enter Password' className='bg-white px-[10px] py-2 rounded-[10px] outline-none border-none' onChange={(e)=>{setpassword(e.target.value)}} />
            <AiOutlineEye onClick={()=>setview(!view)} className='cursor-pointe'/>
            </div>
            {
                err && <p className='text-[red] text-[14px]'>Invalid Password</p>
            }
        <div className='bg-[white] border-[1px] px-6 py-3 rounded-[10px]  w-fit cursor-pointer' onClick={()=>checkpassword()}>
            <p>Submit</p>
        </div>
        </div>
        }

    </div>
  )
}

export default AddProducts
