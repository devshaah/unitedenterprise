import React, { useEffect, useState} from 'react'
import ProductForm from '../components/ProductForm'
import axios from 'axios'
import img from '../assets/image 8.png'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ContactForm from '../components/ContactForm'

const Home = ({setactive}) => {
  const navigate = useNavigate()
  const [companies,setcompanies] = useState([])
  const [products,setproducts] = useState([])
  const [limit,setlimit] = useState(8)
   const posting = async () => {
    try {
        const res = await axios.get('http://127.0.0.1:5000/product');
        const res2 = await axios.get('http://127.0.0.1:5000/company');
        setcompanies(res2.data);
        setproducts(res.data);
        console.log(res.data);
        console.log(res2.data);
    } catch (err) {
        console.error(err);
    }
  }
  useEffect(()=>{
    posting()
  },[])
  
  return (
    <div className=''>
      <div className='grid grid-cols-2 px-20 '>
        <div className=''>
          <img src={img} className='w-full' alt='img' />
        </div>
        <div className='flex flex-col items-center justify-center mx-10 gap-[30px]'>
          <p className='mb-0 text-[2.5rem] font-[500]'>United Enterprise</p>
          <p className='mb-0 text-[#565656] text-[1.1rem]'>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
          <div onClick={()=>{setactive("/contact");navigate("/contact")}} className='bg-[#2639ED] px-10 py-4 rounded-[50px] text-[white] text-[1.2rem]'>
            Enquire Now !
          </div>
        </div>
      </div>
      <div className='py-20 px-20'>
        <p className='text-[2rem] font-[700]'>Our Clients</p>
        <div className='grid grid-cols-[30%_70%] mt-[20px]'>
          <p className='text-[#565656] text-[1rem]'>Several selected clients, who already believe in our service.</p>
          <div className='flex items-center justify-center '>

          </div>
        </div>
      </div>

      <div className='bg-[#F4F9FF] px-20 grid grid-cols-[60%_40%]'>
          <div className='flex flex-col items-center justify-center gap-[20px] text-start'>
            <p className='mb-0 text-[2.2rem]  font-[600]'>Product Companies</p>
            <p className='mb-0 text-[1.1rem] text-[#565656]'>We have a wide range of products such as Ramson,
B-Fit,ramson.</p>
          </div>
          <div className='grid grid-cols-2 mt-0 gap-0'>
            <div className='flex flex-col items-center justify-start gap-[20px] -mt-[18px]'>
            {companies.map((object, i)=>{
                  return (                    
                        i<=2 && <div className='w-fit px-[60px] py-[20px] bg-[white] shadow-[0px_6.706827163696289px_33.53413772583008px_0px_rgba(0,0,0,0.05)]  hover:scale-110 border-[0.5px] border-[#F2F2F2] rounded-[25px] capitalize'>
                          <a href={object.companywebsite} rel="noreferrer" target='_blank' >{object.company}</a>
                      </div>                   
                  )             
                })}
            </div>
            <div className='flex flex-col items-start justify-center gap-[20px] mt-[80px]'>
            {companies.map((object, i)=>{
                  return (                    
                      i>2 && i<=5 && <div className='w-fit  hover:scale-110 px-[60px] py-[20px] bg-[white] shadow-[0px_6.706827163696289px_33.53413772583008px_0px_rgba(0,0,0,0.05)] border-[0.5px] border-[#F2F2F2] rounded-[25px] capitalize' >
                        <a href={object.companywebsite} rel="noreferrer" target='_blank'>{object.company}</a>
                      </div>                   
                  )             
                })}
            </div>
                
          </div>
      </div>

      <div className='px-20 grid grid-cols-2 mt-20 gap-[5rem]'>
        <img className='rounded-[32px]' alt='img' src='https://s3-alpha-sig.figma.com/img/00bf/036e/5c85fe148218431cea661b4db3e73cab?Expires=1693785600&Signature=ZHBwcr-hlcTEhDaxaLpTF4UnLgHzzXAWUAqkJepISd1ndHwDh2jtCj1yWBDM6MqAGA84UAWU7obaOz~SdUOK~2solVmUWQJwbKgDJizXshn3ZCTs0U~Aia5CwPpF8c2jaFVjuFMZ-Qk-l84G80xM8GSm~QL~VD1YEKJJ5~PZIEFr2T9J4KwgDLe4SMm4pYU21GyCUzli6aIowccEyqtoXURJqaX0Zn8qLMOhLxz3gvRbATsbWejssVqqCLXDbrqeDW76wjwuNuo1bdJ5Pa-Mz64oy11ipxtYk47XPd9WtpTDJxsiDIHUopaNKVXIuFsnCJYIg~D9JcKikdywtsip7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
        <div className='flex flex-col gap-[2rem] items-start justify-center text-start'>
            <p className='mb-0 text-[2rem] font-[700] text-start'>About Us</p>
              <p className='mb-0 text-[1.2rem] text-[#565656]'>We have a wide range of products such as ramson,
ramson,ramson.</p>
        </div>

      </div>

      <div className='mt-20 px-20'>
      <div className='flex items-center justify-between mt-[30px]'>
                <p className='text-[2.5rem] text-[black] font-[600] mb-0'>Our Products</p>
                {
                  limit === 8 ?
                  <p onClick={()=>setlimit(16)} className='text-[#2639ED] text-[1.1rem] font-[400] cursor-pointer mb-0'>View More</p>
                  :
                  <p onClick={()=>setlimit(8)} className='text-[#2639ED] text-[1.1rem] font-[400] cursor-pointer mb-0'>View Less</p>

                }
      </div>
      <div className='flex items-center justify-center flex-wrap flex-shrink-0 gap-[5rem] mt-[40px]'>
      {
        products.map((object,i)=>{
          return (
            i < limit && <div>
              <ProductCard product={object}/>
            </div>
          )
        })
      }
      </div>
      </div>

      <div className='mt-20'>
        <ContactForm />

      </div>

    </div>
  )
}

export default Home
