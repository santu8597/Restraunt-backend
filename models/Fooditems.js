const mongoose=require('mongoose')
const FooditemSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        image:{type:String,required:true},
        description:{type:String,required:true},
        rating:{type:Number,required:true,default:0},
        price:{type:Number,required:true,default:0},
        isAvalaible:{type:Boolean,default:true}
        
    }
);
module.exports=mongoose.model('Fooditem',FooditemSchema)