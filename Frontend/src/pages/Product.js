import React from 'react'
import ProductCard from '../components/ProductCard'
import {BsSearch} from 'react-icons/bs'

const Product = () => {
  const temp = [1,2,3];
  const categories = ["Romson","Romson","Romson","Romson"]
  return (
    <div className=''>
      <div className='bg-[#F4F9FF] px-20 flex items-center justify-between py-[35px]' >
          <p className='mb-0 text-[40px] font-[600]'>Our Products</p>
          <div className='bg-white flex items-center justify-center gap-[10px] cursor-pointer px-[20px] py-[12px] rounded-[15px]'>
            <BsSearch/>
            <input type='text' className='outline-none border-none' placeholder='Search...' />
          </div>
      </div>
      <div className='px-20 pt-[30px] mb-[150px]'>
      {
        categories.map((category)=>{
          return <div>
            <div className='flex items-center justify-between mt-[30px]'>
                <p className='text-[40px] text-[black] font-[600] mb-0'>{category}</p>
                <p className='text-[#2639ED] text-[14px] font-[400] cursor-pointer mb-0'>View More</p>
            </div>
            <div className='flex items-center justify-start gap-[70px] mt-[40px]'>
            {
              temp.map((i)=>{
                return <div>
                  <ProductCard/>
                  </div>
              })
            }
            </div>
            </div>
        })
      }
    </div>
    </div>
  )
}

export default Product
