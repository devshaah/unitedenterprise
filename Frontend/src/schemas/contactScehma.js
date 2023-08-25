import * as yup from "yup"

const phoneRegExp = /^(\+91|\+91\-|0)?[789]\d{9}$/

const ContactSchema = yup.object({
    name: yup.string().required("Please enter your name"),
    email:  yup.string().email().required("Please enter your email "),
    phone: yup.string().required("Please enter your mobile number").matches(phoneRegExp, 'Phone number is not valid'),
    message: yup.string()
}
    

)

export default ContactSchema