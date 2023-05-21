const mongoose=require("mongoose");

const studentSchema= new mongoose.Schema({
    id: {
        type: Number,
        required: true
      },
    name:{
        type:String,
        required:true,
    },
    className:{
      type:String,
      required:true,
    },
    RollNo:{
        type:Number,
        required:true,
     },
     age:{
        type: Number
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"]
       
    },
})

module.exports=mongoose.model("Student",studentSchema);