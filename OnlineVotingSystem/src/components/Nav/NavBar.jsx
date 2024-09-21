import { json, NavLink, useNavigate } from 'react-router-dom';
import React from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import axios from 'axios';
const NavBar = () => {

  const navigate = useNavigate();

  const check=()=>{
    
    const info=JSON.parse(localStorage.getItem("user"));
    navigate("/ProfileInfo",{
      state:{data:info}
    })
  }
  const electionDetail=()=>{
    axios.post(`${import.meta.env.VITE_URL}/api/elections/info`).then((res)=>{
        navigate("/Election",{
          state:{data:res.data}
        })
    }).catch((err)=>{
      console.log(err);
      
    })
}


  return (<div className=" 
    z-50 fixed top-0
     flex h-20 
     bg-blue-950
     justify-between items-center 
     w-screen 
     pl-10 pr-10
     border-b-2 border-green-500
    ">
      <ul className=' flex gap-16 w-screen h-20 justify-end items-center pr-40 text-white '>
            <li>
                <button  onClick={check}>Personal Info</button>
            </li>
            <li>
                <button onClick={electionDetail}  >Election</button>
            </li>
            <li>
                <NavLink to='/Contact' >Contact</NavLink>
            </li>
            <li>
                <NavLink to="/votingPannel" >Vote</NavLink>
            </li>
        </ul>
    </div>
  )
}


export default NavBar