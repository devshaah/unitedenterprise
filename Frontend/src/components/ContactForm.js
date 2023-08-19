import React from "react";
import { useFormik } from "formik";
import ContactSchema from "../schemas/contactScehma";
import axios from 'axios'

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const posting = async () => {
    try {
        const res = await axios.post('http://127.0.0.1:5000/message', values );
        console.log(res.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  }


  const { values, errors, handleChange, touched, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: ContactSchema,
    onSubmit: (values, action) => {
      // console.log(values);
      action.resetForm();
    },
  });

  return (
    <div className="w-full px-[118px]  ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center rounded-[75px] bg-[#F4F9FF] py-8 mb-[200px] border-2">
          <div className="text-[40px] font-[650]">Quick Contact</div>
          <p className="py-[20px] text-[#757575] text-[18px]">Several selected clients, who laready believe in our service</p>
          <div className="w-full flex justify-center  gap-8  px-20 py-12">
            <div className="flex w-full flex-col gap-12 ">
              <div className="flex flex-col items-start">
                <div>Name</div>
                <input
                  type="name"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder=" Name"
                  className="rounded-[15px] mt-[9px]  w-full  p-4"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && touched.name ? (
                        <p>{errors.name}</p>
                      ) : null}
              </div>
              <div className="flex flex-col items-start">
                <div>Email</div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  className="rounded-[15px] mt-[9px]  w-full  p-4"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                        <p>{errors.email}</p>
                      ) : null}
              </div>
              <div className="flex flex-col items-start">
                <div>Phone</div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="Phone"
                  className=" rounded-[15px] mt-[9px]  w-full p-3"
                  value={values.phone}
                  onChange={handleChange}
                />
                {errors.phone && touched.phone ? (
                        <p>{errors.phone}</p>
                      ) : null}
              </div>
            </div>

            <div className="w-full ">
              <div className="h-full ">
                <div>Message</div>

                <textarea
                  placeholder="Message"
                  name="message"
                  id="message"
                  autoComplete="off"
                  className="w-full h-full rounded-[15px] mt-[9px]   border-2 p-3 text-start"
                  value={values.message}
                  onChange={handleChange}
                />
                {errors.message && touched.message ? (
                        <p>{errors.message}</p>
                      ) : null}
              </div>
            </div>
          </div>
          <div className=" text-center py-[80px]">
            <button className="py-[20px] text-white text-[16px] font-medium px-[40px] bg-[#2639ED] rounded-[60px]">
              <input onClick={posting} type="submit" className="" value="Contact Now" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
