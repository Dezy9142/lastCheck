const Student=require("../models/StudentSchema");

exports.StudentController=async(req,res)=>{
    try{
        const {id,name,className,RollNo,age,gender}=req.body;
        const response= await Student.create({id,name,className,RollNo,age,gender});
        res.status(200).json({
           success:true,
           data:response,
           message:'Student entry created successfully' ,
        });
    }
    catch(err){
       console.log(err);
       console.error(err);
       res.status(500)
       .json({
        sucess:false,
        data:"Internal server error",
        message:err.message,
       })
    }
};