
import React, { useCallback, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'

export const ForgetPassword = () => {

  const navigate = useNavigate();
  const [input,setInput] = useState({
    email:'',
    password:'',
    repassword:''
  });

  const inputEvent=(e)=>{
   console.log(e.target.name,e.target.value)
  
   const {name,value} = e.target

    setInput((prev)=>{
      return {...prev,[name]:value}
    })

  }
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(input.password+" "+input.repassword)
    if(input.password == input.repassword){
    axios.post(`${import.meta.env.VITE_URL}/api/admin/forgetPassword`,{
      email:input.email,
      password:input.password
    }).then((req,res)=>{

     if(req.data){
      navigate("/adminLogin");
      toast.success("successfully password change");
     }
    }).catch((err)=>{
      console.log("axios"+" " +err)
    })
  }
  else{
    alert("please enter same password");

  }

  }
  return (
    <div className='flex bg-black justify-center items-center h-screen w-screen '>

        <form action="" 
        onSubmit={submitHandler}
        className='flex 
        flex-col justify-center items-center
         w-[500px] h-[500px] gap-8 border
         bg-slate-400 rounded '>
            <label htmlFor="" className='flex flex-col text-2xl ' >
                Email
            <input 
            type="email" 
            name='email'
            onChange={inputEvent}
            placeholder='Enter your email' 
           className='outline-none border-2 rounded border-blue-600 w-72 pl-2'/>
            </label>
            <label htmlFor="" className='flex flex-col text-2xl ' >
            New Password
            <input type="password"
            name='password'
            onChange={inputEvent} 
            placeholder='Enter your new password' className='outline-none border-2 rounded border-blue-600 w-72 pl-2'/>
            </label>
            <label htmlFor="" className='flex flex-col text-2xl ' >
            Retype
            <input type="password" 
            name='repassword'
            onChange={inputEvent}
            placeholder='Retype password' className='outline-none border-2 rounded border-blue-600 w-72 pl-2'/>
            </label>
            <button type='submit' className='border-2 border-blue-600 rounded bg-slate-500 p-2 pl-8 pr-8 relative right-20 text-red-800'>Submit</button>
        </form>
    </div>
  )
}
