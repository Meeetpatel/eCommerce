import React, { useState } from 'react'
import "./CSS/LoginSignup.css"
const LoginSignup = () => {

const [state,setState]=useState("Log in");
const [formData,setFormData]=useState({
  username:"",
  password:"",
  email:""
})

const changeHandler = (e)=>{
  setFormData({...formData,[e.target.name]:e.target.value })
}

const login = async ()=>{
  console.log("Login:Success",formData)
  let responseData;
  await fetch('https://shopoholic-igbw.onrender.com/login',{
    method:"POST",
    headers:{
      Accept:"application/form-data",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(formData),
  }).then((response)=>response.json()).then((data)=>responseData=data)


if(responseData.success){
  localStorage.setItem('auth-token',responseData.token);
  window.location.replace("/Shopoholic");
}
else{
  alert(responseData.errors)
}
}
const signup = async ()=>{
  console.log("Signup:Success",formData);
  let responseData;
  await fetch('https://shopoholic-igbw.onrender.com/signup',{
    method:"POST",
    headers:{
      Accept:"application/form-data",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(formData),
  }).then((response)=>response.json()).then((data)=>responseData=data)


if(responseData.success){
  localStorage.setItem('auth-token',responseData.token);
  window.location.replace("/Shopoholic");
}
else{
  alert(responseData.errors)
}
}
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
      <h1>{state}</h1>
      <div className='loginsignup-fields'>
       {state==="Sign Up"?  <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder='Enter your Name'/>
:""}    <input type="email" name="email" value={formData.email} onChange={changeHandler} placeholder='Enter your Email address'/>
        <input type="password" name="password" value={formData.password} onChange={changeHandler} placeholder='Enter a Password' />
          
     
      </div>
      <button onClick={()=>{state==="Log in"?login():signup()}}>Continue</button>
      {state==="Sign Up"? <p className='loginsignup-login'>Already have an account?<span onClick={()=>{setState("Log in")}}> Login Here</span></p>
   : <p className='loginsignup-login'>Don't have an account?<span  onClick={()=>{setState("Sign Up")}}> Create account</span></p>
  }
       <span className="loginsignup-login guest" onClick={async ()=>{window.location.replace("/Shopoholic")}}>Continue as Guest</span>
    <div className="loginsignup-agree">
      <input type='checkbox' name='' id=''/>
      <p>By Continuing, I agree to the terms and conditions.</p>
    </div>
    </div>
    </div>
  )
}

export default LoginSignup
