const express=require('express')
const tableRoute=express.Router()
const fetch=require('../middlewares/Auth')
const User = require('../models/User')
const Seat = require('../models/Seat')

tableRoute.put('/bookTable',fetch,async (req,res)=>{
    const {SeatNum}=req.body
    const tables=await Seat.find({status:'available',seats:SeatNum})
    if(tables.length===0){return res.json({error:`no tables with ${SeatNum}`})}
    const book=tables[0]
    book.bookedBy=req.user,
    book.status='reserved'
    await book.save()
    return res.json(book)
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
    res.json(error)
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