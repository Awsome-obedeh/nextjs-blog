import mongoose from "mongoose";

// we use an asynchronous function because when connecting with 
// mongodb, It returns a promise
const connect =async ()=>{
    try{
        // we don't put credentials information, because we might push to github, we want to protetct 
        // our sceret credentials, so we need to hide our credential information in what we call an
        // .env file
        const connect = await mongoose.connect("mongodb+srv://Awsome:Awsome1010@cluster0.esc3adi.mongodb.net/")
        if(connect){
            console.log('Db coneccted Successfully')
        }
      
    }

    catch(err){
        console.log(err)
        throw new Error("could not connect", err)

    }
}

export default connect