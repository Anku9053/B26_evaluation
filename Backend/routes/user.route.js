const express = require("express")
const {UserModel} = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {isthere} = require("../middleware/user.middleware")
const userRoute = express.Router()


userRoute.post("/register",isthere,(req,res)=>{
    const {name,email,password,gender,age,city,is_married} = req.body;
    try {
        bcrypt.hash(password,5,async(err,hash)=>{
            const data = new UserModel({
                name,email,password:hash,gender,age,city,is_married,
            })
            await data.save()
            res.status(200).send("User Register Sucessfully")
        })
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})


userRoute.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await UserModel.findOne({email});
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    res.status(200).send({
                        msg:"User Login Sucessfully",
                        token:jwt.sign({userId:user._id},"masai")
                    })
                }
                else{
                    res.status(400).send({msg:"wrong creadentials"})
                }
            })
        }
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})


module.exports ={
    userRoute
}