const express=require("express");
const app=express();

// require("dotenv").config();

// port
const PORT=process.env.PORT ||4000;

// body-parser
app.use(express.json());

const studentRoutes=require("./routes/StudentRoute");
// // middleware
app.use("/api",studentRoutes);

app.listen(PORT,()=>{
    console.log(`server started successfull at ${PORT}`);
})

// const dbConnect=require("./config/database");
// dbConnect();