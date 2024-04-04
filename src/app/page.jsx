// make our page a client page
"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
// import useState
import { useState } from "react";

export default function Home() {
  // store useRouter ina variable
  const router = useRouter();

  const [errMsg, setErrMsg] = useState('')
  const [loading, setLoading] = useState(false)

  async function sumbitHandler(e) {
    // stop default form submission
    e.preventDefault();
    console.log(e);
    let fName = e.target[0].value;
    let LName = e.target[1].value;
    let age = e.target[2].value;
    let phone = e.target[3].value;
    let email = e.target[4].value;
    let password = e.target[5].value;
    console.log(fName, LName, age, phone,email)
    if (!fName) {
      setErrMsg('fill in firstname');
    }
    else if (!LName) {
      setErrMsg('fill in lastname');
    }
    else if (!phone) {
      setErrMsg('fill in phone');
    }
    else if (!age) {
      setErrMsg('fill in age');
    }
    else {

    let  data = {
        fName,
        LName,
        age,
        phone,
        password,
        email,
      }
      // send form data to the api
      const res = await fetch('/api/register/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })

      let datas = await res.json()
      console.log(datas)

      console.log(res)
      console.log(res.ok)
      if(res.status==200){
        router.push('/login')
      }
       if(res.status==400){
        console.log("user already exists")
        setErrMsg("email already exists")
      }
    }



  }
  return (
    <form action="" onSubmit={sumbitHandler}>
      {
        errMsg && <p className="err"> {errMsg}</p>
        
       
      }

      {
        loading ? <p>Loading....</p>:''
      }
      <div className="input-group">
        <label htmlFor="" className="form-label">FirstName</label>
        <input type="text" className="form-control" /*onChange={(e)=>setFirstName(e.target.value)}*/ />
        {/* {console.log(firstName)} */}

      </div> 

      <div className="input-group">
        <label htmlFor="" className="form-label">Lastname</label>
        <input type="text" className="form-control" />
      </div>

      <div className="input-group">
        <label htmlFor="" className="form-label">Age</label>
        <input type="text" className="form-control" />
      </div>

      <div className="input-group">
        <label htmlFor="" className="form-label">PhoneNumber</label>
        <input type="text" className="form-control" />
      </div>
      <div className="input-group">
        <label htmlFor="" className="form-label">Email</label>
        <input type="email" className="form-control" />
      </div>
      
      <div className="input-group">
        <label htmlFor="" className="form-label">Password</label>
        <input type="text" className="form-control" />
      </div>
      <button className="btn">Submit</button>
    </form>
  );
}
