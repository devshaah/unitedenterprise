import React, { useEffect } from 'react'
import ProductForm from '../components/ProductForm'
import axios from 'axios'

const Home = () => {
  //  const posting = async () => {
  //   try {
  //       const res = await axios.post('/product', idhar content aayega jo post karna hai );
  //       console.log(res.data);
  //   } catch (err) {
  //       // Handle Error Here
  //       console.error(err);
  //   }
  // }
  // useEffect(()=>{
  //   posting()
  // },[])
  
  return (
    <div>
      home
      <ProductForm/>
      {/* <TrialForm/> */}
    </div>
  )
}

export default Home
