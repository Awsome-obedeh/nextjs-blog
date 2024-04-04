"use client"
import React, {useState} from 'react'

export default function Create() {

  const [author,setAuthor]=useState('')
  const [title,setTitle]=useState('')
  const [post,setPost]=useState('')

  async function submitHandler(e){
    e.preventDefault();

    // make the psot request to the API
    const res=await fetch('/api/create',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({author,title,post})
    })

  }
  return (
    <div>
       <form onSubmit={submitHandler}>
     
       <div className="input-group">
        <label htmlFor="" className="form-label">Author</label>
        <input type="text" className="form-control" onChange={(e)=>setAuthor(e.target.value)}/>
      </div>
      <div className="input-group">
        <label htmlFor="" className="form-label">Title of post</label>
        <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div className="input-group">
        <label htmlFor="" className="form-label">Body of post</label>
        <textarea type="password" className="form-control" onChange={(e)=>setPost(e.target.value)}></textarea>
      </div>
      
        <p>author :{author}</p>
        <p>title :{title}</p>
        <p>post :{post}</p>
      
      <button className="btn">Submit</button>
    </form>
    </div>
  )
}
