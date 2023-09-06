// const productController = require('./product')
const model =require('../models/companies')
const Company = model.Companies
// const newCompany = productController.company

exports.createCompany=async (req,res)=>{
    // console.log(req.body.company)

    const oldCompany = await Company.findOne({company:req.body.company})
    if(!oldCompany)
    {const company = new Company({
        company :req.body.company,
        companywebsite :req.body.companywebsite

    })
    
    company
    .save()
    .then((doc)=>{
        res.status(200).json(doc)
    })
    .catch((error)=>{
        res.json(error)
    })


}
else{
    console.log("company exists")
}
}


exports.getAllCompanies=async (req,res)=>{
    const companies = await Company.find()
    res.status(200).json(companies)


}