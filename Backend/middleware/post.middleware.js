const jwt = require("jsonwebtoken")
const auth = (req,res,next)=>{
    const token = req.headers.authorization;
    try {
        if(token){
            let decoded = jwt.verify(token,"masai")
            if(decoded){
                req.body.userId = decoded.userId;
                next();
            }
            else{
                res.status(400).send({msg:"Invalid Token"})
            }
        }
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
}

module.exports = {
    auth
}