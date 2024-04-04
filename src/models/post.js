import mongoose from "mongoose";
const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    author:{
        type:String,
        required:true,
       
    },

    post:{
        type:String,
        required:true,
        
    }
},
   {timestamps:true}
)
const postModel=mongoose.models.post || mongoose.model("post",postSchema)

export default postModel