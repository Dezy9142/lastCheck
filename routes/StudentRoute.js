const express=require("express");
const router=express.Router();

// 
const {StudentController}=require("../controller/StudentController");
const {getStudentData}=require("../controller/getStudentData");

router.post("/upload",StudentController);
router.get("/getData/:id",getStudentData);

module.exports=router;
