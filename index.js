const express=require("express");
const dbConnection=require("./src/db/dbconnection");
const addUser = require("./src/controlers/addUser.controler");
const SearchUser = require("./src/controlers/searchUser.controler");
const editAddress = require("./src/controlers/editAddress.controler");



require("dotenv").config()
console.log(process.env.PORT)


// db connection
dbConnection( )

// server related task
const app=express();
app.use(express.json())


app.get("/",async(req,res)=>{

    res.status(200).json({
        message:"your data get successfully",
        "data":["This is daga","Another data"]
    })
})

app.post("/adduser",addUser)
app.post("/searchUser",SearchUser)
app.put("/editAddress",editAddress)

const port=process.env.PORT||4000
app.listen(port,()=>{
    console.log("server run on port",port)
})