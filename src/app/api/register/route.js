import { NextResponse } from "next/server"
import personModel from "@/models/person"
import connect from "@/util/db"
import bcryptjs from 'bcryptjs'

export const POST =async(request)=>{
    try{
        // connect to mongodb
        connect()
        // take data coming from front end 
        const {fName,LName, age , phone,password,email}=await request.json()
        // console.log(request)
        console.log(fName,LName,age,phone,email)
      let  body={
        fName,LName, age , phone,password,email
        }

        // /check if user email exists in the database
        const userExists=personModel.findOne({email:email})
        if(userExists){
            return new NextResponse(JSON.stringify({msg:"user email exists already"}), {status:400})
        }
        
        // if not existing  carry out with registration
        else{
                // hash password
       const salt =  bcryptjs.genSaltSync(10)
       const hashpassword=bcryptjs.hashSync(password,salt)
        // store user data in the databaseo
        
        const user= personModel({firstname:fName, lastname:LName, age,phone,email:email, password:hashpassword})

        await user.save()
        return new NextResponse( JSON.stringify({msg:"user stored succesffuly "}),{status:200}) 
        }

        
    }

    catch(err){
        console.log(err.message)
        return new NextResponse("Server Error", {status:500})
    }

}