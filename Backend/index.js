const express= require("express")
const {connection} = require("./db")
const {auth} = require("./middleware/post.middleware")
const {postRoute} = require("./routes/post.route")
const {userRoute} = require("./routes/user.route")
var cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
require("dotenv").config()
app.use("/users",userRoute)
app.use(auth)
app.use("/posts",postRoute)


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`connected`)
    } catch (error) {
        console.log({msg:error.message})
    }
    console.log(`it is connected and running in ${process.env.port}`)
})