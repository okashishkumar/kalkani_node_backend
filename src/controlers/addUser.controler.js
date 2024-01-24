const User=require("./../models/user.model")

const addUser=async(req,res)=>{

    try{
        const payload=req.body;
        console.log("payload",payload)



        let newUser= new User({...payload})

        let response=await newUser.save()



        return res.status(201).json({
            "message":"new user added",
            response:response
        })
    }catch(error){
        return res.status(500).json({
            "message":"Internal server error",
            "info":error,
            "error":error.message
        })
    }
    
}

module.exports=addUser;