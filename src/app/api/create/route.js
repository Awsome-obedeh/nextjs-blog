import postModel from "@/models/post"
import connect from "@/util/db"
import { NextRequest, NextResponse } from "next/server"

export const  POST=async (request)=>{
    try{
       
        // connect to database
        connect()
        const {author,title,post}=await request.json()
         if(!author){
           return new NextResponse(JSON.stringify("AUthor name cannot be empty", {staus:400})) 
         }
         else{
            // save in database
            const posts=  postModel({post,author,title})
            await posts.save()

             return new NextResponse(JSON.stringify({msg:"Post created successfully"}), {status:200})
        }
            
    }
    catch(err){
        console.log(err.message)
        return new NextResponse("server Error",{status:500})
    }
}