import * as yup from "yup"



const ProductSchema = yup.object({
    prodname: yup.string().required("Please enter your first name"),
    quantity:  yup.string().email().required("Please enter your email "),
    company: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Please enter your mobile number"),
    category: yup.string().required("Please enter the category"),
    subcategory: yup.string(),
    image:yup.mixed().required("Please upload the image of the product")

}
    

)

export default ProductSchema