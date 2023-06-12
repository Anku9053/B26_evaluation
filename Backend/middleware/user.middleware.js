const {UserModel} = require("../models/user.model")

const isthere = async(req,res,next)=>{
    const {email} = req.body;
    const user = await UserModel.findOne({email})
    if(user){
        res.status(200).send({msg:"User already exist, please login"})
    }
    else{
        next()
    }
}


module.exports = {isthere}