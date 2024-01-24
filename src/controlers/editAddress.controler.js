const User=require("./../models/user.model")
const mongoose =require("mongoose")


const editAddress=async(req,res)=>{

try{

let operationType=req.body.operationType  //add or edit

    let userId=req.body.userId;

    // if operation type add then pull address object to Address filed
    // if operation type is edit then update those address with address id

  
     
    let response="";
    if(operationType=="add"){
        let newAddress=req.body.address;
       
            response=await User.updateOne({_id:userId},
                {$push:{address:newAddress}}
            )

            console.log("na",newAddress,response)
    }
    else{
        let editableAddress=req.body.address;
        let addressId=req.body.addressId;
        response= await User.findOneAndUpdate({_id:userId, "address._id":addressId},
            {  address:{$push:editableAddress}}
        )
    }
   

    return res.status(200).json({
        "message":"Address updated",
        "response":response
    })
        



}catch(error){
    return res.status(500).json({
        "message":"Internal server error",
        "info":error,
        "error":error.message,
        "payload":req.body
    })
}
}

module.exports= editAddress;