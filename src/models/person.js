import mongoose from "mongoose";

const personSchema=({
    firstname:{
        type:String,
        trim:true,
        required:true
        
    },
    lastname:{
        type:String,
        trim:true,
        required:true
    },
    phone:{
        type:String,
        trim:true,
        required:true
    },
    age:{
        type:Number,
        trim:true,
        required:true,
        min:8
    },
    email:{
        type:String,
      
        required:true,
     
    },
    password:{
        type:String,
        required:true,
       
    }
})

// nowe we have to model our person schema to our model(table)

const personModel=mongoose.models.person || mongoose.model('person',personSchema)
export default personModel