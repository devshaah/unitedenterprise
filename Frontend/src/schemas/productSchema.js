import * as yup from "yup"

const ProductSchema = yup.object({
    prodname: yup.string().required("Please enter your product name"),
    quantity:  yup.number().required("Please enter the quantity "),
    company: yup.string().required("Please enter the company of the product"),
    companywebsite: yup.string().required("Please enter the website of the company of the product"),
    category: yup.string().required("Please enter the category"),
    subcategory: yup.string(),
    image:yup.mixed()
}

)

export default ProductSchema