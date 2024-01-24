const mongoose=require("mongoose")
require("dotenv").config()

const dbUrl=process.env.DB_URL
console.log(dbUrl)
const dbConnection=()=>{

    mongoose.connect(dbUrl)
    mongoose.connection.on('connected',()=>{
        console.log("connection successful with mongodb")
    })
    mongoose.connection.on("error",(error)=>{
        console.log("error while connection",error)
    })
    console.log(dbUrl)
}

module.exports=dbConnection;