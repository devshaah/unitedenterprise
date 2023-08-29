import React, { useState } from "react";
import { useFormik } from "formik";
import ProductSchema from "../schemas/productSchema";
import axios from 'axios'

const initialValues = {
    prodname: "",
    quantity:  "",
    company: "",
    category: "",
    subcategory: "",
    image:""
};

const ProductForm = () => {

  const postingcompany=async()=>{
    try {
    const res2 = await axios.post('http://127.0.0.1:5000/company', values );
      console.log(res2.data);
  } catch (err) {
      console.error(err);
  }
}

  const posting = async () => {
    try {
        const res1 = await axios.post('http://127.0.0.1:5000/product', formdata );
        console.log(res1.data);
        postingcompany();
        
    } catch (err) {
        console.error(err);
    }
  }

  const { values, errors, handleChange, touched, handleSubmit , setFieldValue } = useFormik({
    initialValues: initialValues,
    validationSchema: ProductSchema,
    onSubmit: (values, action) => {
      action.resetForm();
      setImagefile(null)
    },
  });

  const [imagefile,setImagefile] = useState(null)

  const formdata = new FormData();
  formdata.append("prodname",values.prodname)
  formdata.append("quantity",values.quantity)
  formdata.append("company",values.company)
  formdata.append("category",values.category)
  formdata.append("subcategory", values.subcategory)
  formdata.append("file",imagefile)

  return (
    <div className="w-full px-[118px]  ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center rounded-[75px] bg-[#F4F9FF] py-8 mb-[200px] border-2">
          <div className="text-[40px] font-[650]">Add Product</div>
          <div className="w-full flex justify-center  gap-8  px-20 py-12">
            <div className="flex w-full flex-col gap-12 ">
              <div className="flex flex-col items-start">
                <div>Product Name</div>
                <input
                  type="name"
                  name="prodname"
                  id="prodname"
                  autoComplete="off"
                  placeholder=" Product Name"
                  className="rounded-[15px] mt-[9px]  w-full  p-4"
                  value={values.prodname}
                  onChange={handleChange}
                />
                {errors.prodname && touched.prodname ? (
                        <p>{errors.prodname}</p>
                      ) : null}
              </div>
              <div className="flex flex-col items-start">
                <div>Quantity</div>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  autoComplete="off"
                  placeholder="Quantity"
                  className="rounded-[15px] mt-[9px]  w-full  p-4"
                  value={values.quantity}
                  onChange={handleChange}
                />
                {errors.quantity && touched.quantity ? (
                        <p>{errors.quantity}</p>
                      ) : null}
              </div>
              <div className="flex flex-col items-start">
                <div>Company</div>
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="off"
                  placeholder="Company"
                  className=" rounded-[15px] mt-[9px]  w-full p-3"
                  value={values.company}
                  onChange={handleChange}
                />
                {errors.company && touched.company ? (
                        <p>{errors.company}</p>
                      ) : null}
              </div>
              <div className="flex flex-col items-start">
                <div>Category</div>
                <input
                  type="text"
                  name="category"
                  id="category"
                  autoComplete="off"
                  placeholder="Category"
                  className=" rounded-[15px] mt-[9px]  w-full p-3"
                  value={values.category}
                  onChange={handleChange}
                />
                {errors.category && touched.category ? (
                        <p>{errors.category}</p>
                      ) : null}
              </div>
              <div className="flex flex-col items-start">
                <div>SubCategory</div>
                <input
                  type="text"
                  name="subcategory"
                  id="subcategory"
                  autoComplete="off"
                  placeholder="Subcategory"
                  className=" rounded-[15px] mt-[9px]  w-full p-3"
                  value={values.subcategory}
                  onChange={handleChange}
                />
                {errors.subcategory && touched.subcategory ? (
                        <p>{errors.subcategory}</p>
                      ) : null}
              </div>
              <div className="flex flex-col items-start">
                <div>Image</div>
                <input
                  type="file"
                  name="image"
                //   id="image"
                //   autoComplete="off"
                //   placeholder="Phone"
                  className=" rounded-[15px] mt-[9px]  w-full p-3"
                //   value={values.image}
                onChange={(e)=>{setImagefile(e.target.files[0])}}
                // onChange={(event)=>{
                //     setFieldValue("image",event.target.files[0] )
                // }}
                // ref={input => this.fileInput = input}
                />
                {errors.image && touched.image ? (
                        <p>{errors.image}</p>
                      ) : null}
              </div>
            </div>

           
          </div>
          <div className=" text-center py-[80px]" onClick={posting}>
            <button className="py-[20px] text-white text-[16px] font-medium px-[40px] bg-[#2639ED] rounded-[60px]">
              <input            
                type="submit" className="" value="Add product" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
