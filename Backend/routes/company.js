const express = require('express')
const router = express.Router()
const companyController = require ('../controllers/company')

router 
.get('/',companyController.getAllCompanies)
.post('/',companyController.createCompany)

exports.router=router