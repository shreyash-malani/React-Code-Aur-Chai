const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const EmployeeModel = require('./models/Employee_models'); //importing the EmployeeModel from the models folder

const app = express();

app.use(express.json()); //data coming from frontend to backend will be in json format 
app.use(cors()); //to allow cross-origin requests from frontend to backend

mongoose.connect("mongodb://localhost:27017/Employee")

app.post('/login', (req, res) => {
    const {email,password} = req.body;
    EmployeeModel.findOne({email:email,password:password})
    .then((user)=>{
        if(user)
        {
            if(user.password===password)
            {
                res.json("Success");
            }
            else
            {
                res.json("Password is incorrect");
            }
        }
        else
        {
            res.json("User not found");
        }    
    })
})
app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then((employees)=>res.json(employees))
    .catch((err)=>res.json(err));
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})