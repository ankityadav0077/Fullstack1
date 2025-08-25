const express=require("express")
const dotenv=require("dotenv")  
const app=express()
dotenv.config();  // Load variables

console.log(process.env.PORT);       // 5000
// console.log(process.env.DB_USER);    // myusername
// console.log(process.env.DB_PASS);    // mypassword

app.get("/",(req,res)=>{
    res.send("hello from the backend")
})

app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${process.env.PORT} `);
    console.log('server runing at http://localhost:3000');
})