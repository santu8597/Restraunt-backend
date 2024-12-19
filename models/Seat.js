const mongoose=require("mongoose")
const seatSchema=mongoose.Schema(
    {
   
  tableNumber:{type:Number,required:true,unique:true},
  seats: {type:Number,required:true},
status:{type:String,required:true,default:"available",enum: ['available', 'occupied', 'reserved'],},
bookedBy:{ type: mongoose.Schema.Types.ObjectId, required: true, ref: "User",default:null }
  },
  { timestamps: true }
    
)
module.exports=mongoose.model("Seat",seatSchema)