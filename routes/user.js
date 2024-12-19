const express=require('express')
const userRoute=express.Router()
const User=require('../models/User')
const bcrypt = require('bcryptjs');
const fetch=require('../middlewares/Auth')
require("dotenv").config();
const generateToken=require('../generateToken')

//login route    
userRoute.post('/login',async (req,res)=>{
    try {        
    const {email,password}=req.body
    let sucess=false
    let type="user"
    const user=await User.findOne({email})
    if (!user) {return res.status(400).json({ sucess:sucess,type:type,error: "User does not exist" })}
    type="password"
    const pass2 = await bcrypt.compare(password,user.password);
    if (!pass2) {return res.status(400).json({ sucess:sucess,type:type,error: "Your password is incorrect" })}
    sucess=true
    res.json({
        _id:user.id,
        name:user.name,
        email:user.email,
        token:generateToken(user._id),
        isAdmin:user.isAdmin,
        createdAt:user.createdAt
    })          
    } catch (error) {
        sucess=false
        res.json({sucess:sucess,error:"Some Internal error occured"})
    }   
}) 

//signup route
userRoute.post('/signup',async (req,res)=>{
    try {
        const {email,password,name}=req.body
        let sucess=false;
        let user = await User.findOne({ email});
        if (user){return res.status(400).json({ sucess,error: "User already exists with this email" })}
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(password, salt);
        user = await User.create({
            name: name,
            email: email,
            password: pass,
        })
    const token = generateToken(user._id)
    sucess=true;
    res.json({ sucess:sucess,token:token });
    } catch (error) {
    sucess=false;
    res.json({sucess:sucess,error:"Some Internal error occured"})
    }
}) 
 
//user profile route
userRoute.post('/profile',fetch,async (req,res)=>{
    try {
        const userId = req.user;
        const user = await User.findById(userId).select("-password");
        if(user){res.json({sucess:true,user});}
    } catch (error) {
        res.json({sucess:sucess,error:"Some Internal error occured"})
    }                                                               
    })

module.exports = userRoute