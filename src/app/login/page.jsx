"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import React from 'react'



export default function Login() {

  const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [err,setErr]=useState('')
const router=useRouter()
async function submitHandler(e){
  e.preventDefault()

  const res= await fetch('/api/login',{
    method:"POST",
    headers:{
      "Content-type":"apllication/json"
    },
    body:JSON.stringify({password,email})
  })

  if(res.status==200){
    router.push('/create')
  }
 
  else{
    setErr("invalid credentials")
  }

}

  return (
    <form onSubmit={submitHandler}>
      {
        err && <p style={{color:"red"}}>{err}</p>
      }
       <div className="input-group">
        <label htmlFor="" className="form-label">Email</label>
        <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className="input-group">
        <label htmlFor="" className="form-label">Password</label>
        <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <button className="btn">Submit</button>
    </form>
  )
}
