const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String

})


const EmployeeModel = mongoose.model('hero', EmployeeSchema); //Employees is the table name 

module.exports = EmployeeModel;