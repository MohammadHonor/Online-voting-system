import React, { useState } from 'react'
import { useRef } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


const AdminRegisteration = () => {
const navigate = useNavigate();
  const nameUseRef=useRef('')
  const emailUseRef = useRef('');
  const passwordUseRef = useRef('');
 
  const [admin,setAdmin] = useState({
    name:'',
    email:'',
    password:''
  });
  const inputEvent=(e)=>{
    e.preventDefault();
    const {name,value} =e.target;
    setAdmin((prev)=>{
      return{...prev,[name]:value}
    })
  }

  const submitHandler=(e)=>{
    e.preventDefault();

    axios.post("http://localhost:8080/api/admin/register",{
      name:admin.name,
      email:admin.email,
      password:admin.password
    }
      )
    .then((req,res)=>{
nameUseRef.current.value='';
emailUseRef.current.value='',
passwordUseRef.current.value=''
if(req.data ){
  navigate("/AdminLogin");
  toast.success("successfully registered",{
    position:"top-left",
    autoClose:"1000",
    closeOnClick:true,
    pauseOnHover:true
  })

}
    })
    .catch((err)=>{
      console.log("frontend "+' '+err)
    })
  }
  return (
    <div className='flex flex-col
     h-screen 
     border-2 
     items-center justify-center bg-black'>
      
      <form action="" onSubmit={submitHandler} className='flex  flex-col rounded gap-8 justify-center items-center bg-sky-600 border-rounded  border-blue-900 h-[500px] w-[500px]'>
      <b className='text-3xl'>Admin Registration from</b>
        <input 
        type="text"
        name="name"
        id=""
        ref={nameUseRef}
        placeholder='Enter your Name'
        onChange={inputEvent}
        className='outline-none pl-2 border-blue-500 border w-96 h-8'
        />
         <input 
        type="email"
        name="email"
        id=""
        ref={emailUseRef}
        onChange={inputEvent}
        placeholder='Enter your email'
        className='outline-none pl-2 border-blue-500 border w-96 h-8'
        />
         <input 
        type="password"
        name="password"
        id=""
        ref={passwordUseRef}
        onChange={inputEvent}
        placeholder='Enter your password'
        className='outline-none pl-2 border-blue-500 border w-96 h-8 '
        />
        <button type="submit"  className='border w-24 border-blue-700 bg-amber-800 rounded p-2'>Submit</button>
      </form>
    </div>
  )
}

export default AdminRegisteration;