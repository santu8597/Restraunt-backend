const express=require('express')
const tableRoute=express.Router()
const fetch=require('../middlewares/Auth')
const User = require('../models/User')
const Seat = require('../models/Seat')
const sendEmail = require('../email')

tableRoute.put('/bookTable',fetch,async (req,res)=>{
  try {
    const {SeatNum}=req.body
    const user=await User.findById(req.user)
    const tables=await Seat.find({status:'available',seats:SeatNum})
    if(tables.length===0){return res.json({sucess:false,error:`no tables with ${SeatNum}`})}
    const book=tables[0]
    book.bookedBy=req.user,
    book.status='reserved'
    await book.save()
    const detail={
      name:user.name,
      recipent:user.email,
      table:book.tableNumber,
      id:book._id,
      Webmail:"http://localhost:5173/"


    }
   res.json(book)
   sendEmail(detail)
    
  } catch (error) {
    return  res.json({sucess:false,error:"Some Internal error occured"})
  }
    
})


tableRoute.post('/add',fetch,async (req,res)=>{
   try {
    const {SeatNum,tableNumber,status}=req.body
    const newProduct=new Seat({
    tableNumber:tableNumber,
      seats: SeatNum,
    status:status,
    bookedBy:req.user
    })
    await newProduct.save()
    res.json(newProduct)
   } catch (error) {
    res.json({sucess:false,error:"Some Internal error occured"})
   }
})

tableRoute.get('/allTables',fetch,async(req,res)=>{
  try {
    const seats=await Seat.find({})
  res.json(seats)
  } catch (error) {
    res.json(error)
  }
  })

tableRoute.put('/freeTable/:id',fetch,async(req,res)=>{
  try {
    const seat=await Seat.findById(req.params.id)
    seat.status='available'
    seat.bookedBy=req.user
    const newSeat=await seat.save()
    res.json(newSeat)
  } catch (error) {
    
  }
})

module.exports=tableRoute