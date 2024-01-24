const User =require("./../models/user.model")


const SearchUser=async(req,res)=>{

            let payload=req.body;

            try{
                let searchElement=payload.searchElement;

                let searchQuery={$or:[
                    {email:searchElement},
                    {"address.city":searchElement},
                    {firstName:searchElement},
                    {lastName:searchElement},
                ]}
                
                let response=await User.find(searchQuery)

                return res.status(200).json({
                    "message":"your requested data founded",
                    "response":response
                })
                
            }catch(error){
                return res.status(500).json({
                    "message":"Internal server errror",
                    "info":error.message,
                })
            }
}

module.exports=SearchUser;