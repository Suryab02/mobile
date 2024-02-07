import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate= useNavigate();
  const [email,setEmail] = useState('');
const handleSubmit = async(event) =>{
  
  event.preventDefault();
  let username = event.target.username.value;
  let password = event.target.password.value;

  const response = await axios.post("http://localhost:5000/login",{
    username,password
  });
 if(response.data){
  setEmail(username);
  navigate("/products");
 }
 else{
  alert("invalid login");
 }
 
};

  return (
  <div>
  <form onSubmit={handleSubmit}>

    <input type="text"  placeholder="Enter Your email" onChange={(e) =>setEmail(e.target.value)} name="username"/>
    <input type="password" placeholder="Enter Your password" name="password"/>
    <button type="submit" >Submit</button>
  </form>
  </div>
  );
}

export default Login;
