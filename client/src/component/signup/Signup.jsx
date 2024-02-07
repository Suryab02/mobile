import React, { useState } from "react";
import axios from "axios";
function Signup() {
  const [email,setEmail] = useState('');
  const [name ,setName] = useState('');
  const[password,setPassword] = useState('');
  const onSubmit = async(event) =>{
    event.preventDefault();
    const response = await axios.post("http://localhost:5000/signup",{
      email,name,password
    });
    if(response.data){
      console.log("user data save");  
    }
    else{
      console.log("falied to save data"); 
    }
    
  }

  return (
  <div>
  <form onSubmit={onSubmit}>
    <input type="text"  value={email} name="email" onChange={(e) => setEmail(e.target.value)}placeholder="Enter your email"/>
    <input type="text" value={name}  name="name" onChange={(e)=> setName(e.target.value)} placeholder="Enter Your name " />
    <input type="text" value={password} name="password" onChange= {(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
    <input type="text" placeholder="Enter your Retype pasword" />
    <button type="submit" >Submit</button>
    </form>
  </div>);
}

export default Signup;
