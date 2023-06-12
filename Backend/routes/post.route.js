const express = require("express")
const {PostModel} = require("../models/post.model")
// const {auth} = require("../middleware/post.middleware")
const postRoute = express()


postRoute.post("/add",async(req,res)=>{
    const payload = req.body;
    try {
        const data = new PostModel(payload)
        await data.save()
        res.status(200).send({msg:"New Post Added"})

    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})


postRoute.get("/",async(req,res)=>{
    const userId = req.body;
    try {
        const post = await  PostModel.find({userId:userId.userId})
        res.status(200).send(post)
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})


postRoute.patch("/update/:userId",async(req,res)=>{
    const userId = req.params.userId;
    const payload = req.body;
    try {
        await PostModel.findByIdAndUpdate({_id:userId},payload)
        res.status(200).send({msg:"Post is updated"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

postRoute.delete("/delete/:postId",async(req,res)=>{
    const postId = req.params.postId;
    
    try {
        await PostModel.findByIdAndDelete({_id:postId})
        res.status(200).send({msg:"Post is deleted"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})



postRoute.get("/filter",async(req,res)=>{
    const userId = req.body;
    try {
        const data = await PostModel.find({no_of_comments:{$gt:0,$lt:5}})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

postRoute.get("/device",async(req,res)=>{
    // const userId = req.body;
    const device1 = req.query.device1
    const device2 = req.query.device2


    try {
        const data = await PostModel.find({device:[device1,device2]})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

postRoute.get("/dev",async(req,res)=>{
    // const userId = req.body;
    const device = req.query.device;
    


    try {
        const data = await PostModel.find({device:device})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

postRoute.get("/top",async(req,res)=>{
    const userId = req.body;
    


    try {
        const data = await PostModel.find({userId:userId.userId}).sort({no_of_comments:-1}).limit(3)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})



module.exports = {
    postRoute
}