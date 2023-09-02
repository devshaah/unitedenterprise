import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import {BsSearch} from 'react-icons/bs'
import axios from 'axios'
import gif from '../assets/loader.gif'

const Product = () => {
  const [companies,setcompanies] = useState([])
  const [products,setproducts] = useState([])
  const [id,setid] = useState("")
  const [loading,setloading] = useState(true)


  const posting = async () => {
    try {
        const res = await axios.get('http://127.0.0.1:5000/product');
        const res2 = await axios.get('http://127.0.0.1:5000/company');
        setcompanies(res2.data);
        setproducts(res.data);
        console.log(res.data);
        console.log(res2.data);
        setloading(false)
    } catch (err) {
        console.error(err);
    }
  }
  useEffect(()=>{
    posting()

  },[])

  const changes = (company) => {
    console.log(company.company)
    if(id === "") setid(company.company)
    else setid("")
  }

  return (
    <div className=''>
    { loading ?
    <div className='h-[80vh] w-full flex items-center justify-center'>
      <img src={gif} className='h-[200px]' />
      </div>
    :
      <div>
      <div className='bg-[#F4F9FF] px-20 flex items-center justify-between py-[35px]' >
          <p className='mb-0 text-[40px] font-[600]'>Our Products</p>
          <div className='bg-white flex items-center justify-center gap-[10px] cursor-pointer px-[20px] py-[12px] rounded-[15px]'>
            <BsSearch/>
            <input type='text' className='outline-none border-none' placeholder='Search...' />
          </div>
      </div>
      <div className='px-20 pt-[30px] mb-[150px]'>
      {
        companies.map((company)=>{
          return <div className=''>
            <div className='flex items-center justify-between mt-[30px]'>
                <p className='text-[40px] text-[black] font-[600] mb-0'>{company.company}</p>
                {
                  id===company.company ?
                  <p onClick={()=>{changes(company)}} className='text-[#2639ED] text-[14px] font-[400] cursor-pointer mb-0'>View Less</p>
:
                  <p onClick={()=>{changes(company)}} className='text-[#2639ED] text-[14px] font-[400] cursor-pointer mb-0'>View More</p>

                }
            </div>
            <div className={`flex items-center justify-start gap-[70px] mt-[40px] ${id===company.company ? "flex-wrap" : ""}`}>
            {
              products.map((product,i)=>{
                return  product.company === company.company && <div>
                  <ProductCard product={product}/>
                  </div>
              })
            }
            </div>
            </div>
        })
      }
    </div>
    </div>}
    </div>
  )
}

export default Product
