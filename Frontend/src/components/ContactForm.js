import React from "react";
import { useFormik } from "formik";
import ContactSchema from "../schemas/contactScehma";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const { values, errors, handleChange, touched, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: ContactSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center bg-slate-500 py-12 ">
          <div>quick contact</div>
          <p>Several selected clients, who laready believe in our service</p>
          <div className="w-full flex justify-center  gap-8  px-20 py-12">
            <div className="flex w-full flex-col gap-12 ">
              <div className="flex flex-col items-start">
                <div>name</div>
                <input
                  type="name"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder=" Name"
                  className=" w-full  p-4"
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
                  className=" w-full  p-4"
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
                  className="  w-full p-3"
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
                  className="w-full h-full   border-2 p-3 text-start"
                  value={values.message}
                  onChange={handleChange}
                />
                {errors.message && touched.message ? (
                        <p>{errors.message}</p>
                      ) : null}
              </div>
            </div>
          </div>
          <div className=" text-center">
            <button>
              <input type="submit" className="" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
