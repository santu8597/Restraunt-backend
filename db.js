const mongoose=require('mongoose');
require('dotenv').config();
const mongo=async ()=>{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB Database");
}
module.exports=mongo