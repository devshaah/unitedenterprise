import React, { useEffect,} from 'react'
import ProductForm from '../components/ProductForm'
import axios from 'axios'
import img from '../assets/image 8.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  //  const posting = async () => {
  //   try {
  //       const res = await axios.get('http://127.0.0.1:5000/product');
  //       console.log(res.data);
  //   } catch (err) {
  //       // Handle Error Here
  //       console.error(err);
  //   }
  // }
  // useEffect(()=>{
  //   posting()
  // },[])
  const Categories = ["a","b","c","d","e","f"]
  
  return (
    <div className=''>
      <div className='grid grid-cols-2 px-20'>
        <div className=''>
          <img src={img} className='w-full' alt='img' />
        </div>
        <div className='flex flex-col items-center justify-center mx-10 gap-[30px]'>
          <p className='mb-0 text-[40px]'>United Enterprise</p>
          <p className='mb-0 text-[#565656] text-[15px]'>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
          <div onClick={()=>navigate("/contact")} className='bg-[#2639ED] px-10 py-4 rounded-[50px] text-[white] text-[18px]'>
            Enquire Now !
          </div>
        </div>
      </div>
      <div className='py-20 px-20'>
        <p className='text-[40px] font-[700]'>Our Clients</p>
        <div className='grid grid-cols-[30%_70%] mt-[20px]'>
          <p className='text-[#565656] text-[17px]'>Several selected clients, who already believe in our service.</p>
          <div className='flex items-center justify-center '>

          </div>
        </div>
      </div>

      <div className='bg-[#F4F9FF] px-20 grid grid-cols-[60%_40%]'>
          <div className='flex flex-col items-center justify-center gap-[20px] text-start'>
            <p className='mb-0 text-[40px]  font-[600]'>Product Categories</p>
            <p className='mb-0 text-[16px] text-[#565656]'>We have a wide range of products such as ramson,
ramson,ramson.</p>
          </div>
          <div className='grid grid-cols-2 mt-0 gap-0'>
            <div className='flex flex-col items-center justify-start gap-[20px] -mt-[18px]'>
            {Categories.map((object, i)=>{
                  return (                    
                        i<=2 && <div className='w-fit px-[60px] py-[20px] bg-[white] shadow-[0px_6.706827163696289px_33.53413772583008px_0px_rgba(0,0,0,0.05)] border-[0.5px] border-[#F2F2F2] rounded-[25px]'>
                          {object}
                      </div>                   
                  )             
                })}
            </div>
            <div className='flex flex-col items-start justify-center gap-[20px] mt-[80px]'>
            {Categories.map((object, i)=>{
                  return (                    
                      i>2 && <div className='w-fit px-[60px] py-[20px] bg-[white] shadow-[0px_6.706827163696289px_33.53413772583008px_0px_rgba(0,0,0,0.05)] border-[0.5px] border-[#F2F2F2] rounded-[25px]'>
                          {object}
                      </div>                   
                  )             
                })}
            </div>
                
          </div>
      </div>

    </div>
  )
}

export default Home
