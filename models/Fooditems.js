const mongoose=require('mongoose')
const reviewSchema=new mongoose.Schema({
    name:{type:String,required:true},
    rating:{type:Number,required:true},
    comment:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'User'}
    

});
const FooditemSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        image:[String],
        description:{type:String,required:true},
        rating:{type:Number,required:true,default:0},
        
        price:{type:Number,required:true,default:0},
        isAvalaible:{type:Boolean,default:true},
        reviews:[reviewSchema]
    }
);
module.exports=mongoose.model('Fooditem',FooditemSchema)