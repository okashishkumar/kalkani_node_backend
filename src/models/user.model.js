

const mongoose=require("mongoose");
 const Schema=mongoose.Schema;

 const userSchecma= new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true,unique: true},
    mobileNo:{type:String,required:true,}, // valid 10 degit number
    dob:{type:Date},
    address:[{
        line1:{type:String,required:true},
        line2:{type:String,},
        pincode:{type:Number,required:true,},
        city:{type:String,required:true},
        state:{type:String,required:true},
        type:{type:String,enum:["Home","Office"]}
    }]


 })

 module.exports= mongoose.model("User",userSchecma)