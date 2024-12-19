const jwt=require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;
const fetch=async (req,res,next)=>{
    const token=req.header('auth-token');
    try {
        if(!token){
            return res.status(401).json({error:"Not Authorized"});
        }
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.id; 
        next();
    } catch (error) {
        res.json({sucess:false,error:"Not Authorized"});
        next();
    }
   
   
    

}
module.exports=fetch;
