import mongoose from "mongoose"

const userSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        
        
    },
    age:{
        type:Number,
        required:true,
        trim:true

    }
},{timestamps:true})

const User=mongoose.models.User || mongoose.model("User", userSchema)
export default User