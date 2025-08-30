const express=require("express")
const dotenv=require("dotenv")  
const app=express()
dotenv.config();  // Load variables
const {condectedDB}=require("./middlewere/dataBases/databeseconection");
const { default: createNewUser } = require("./middlewere/dataBases/db functions/createNewuser");
const { default: tryDb } = require("./middlewere/dataBases/db functions/try");
condectedDB;  // Connect to the database
console.log(process.env.PORT);       // 5000
// console.log(process.env.DB_USER);    // myusername
// console.log(process.env.DB_PASS);    // mypassword
app.use(express.json())  //middleware to parse json data

app.get("/abc",(req,res)=>{
    console.log("hello from the backend",req);
    res.json({ msg: "Hello from /abc" });
    // res.send("hello from the backend")
})
//user authentication routes
app.put('/singup',createNewUser,(req,res)=>{
    // console.log("request made on /singup with data ",req.body," user is ",req.user);
    res.status(200).json({msg:"user created successfully user is "})
})
app.post('/login',(req,res)=>{})
app.delete('/userremove',(req,res)=>{})  

//roles and permissions routes


//try section 
tryDb();
app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${process.env.PORT} `);
    console.log('server runing at http://localhost:3000');
})