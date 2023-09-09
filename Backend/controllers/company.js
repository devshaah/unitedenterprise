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
exports.updateCompany = async (req, res) => {
    const id = req.params.id;
    try {
      const doc = await Company.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.status(202).json(doc);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  };