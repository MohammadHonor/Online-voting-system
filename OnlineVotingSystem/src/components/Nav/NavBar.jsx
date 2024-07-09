import { NavLink } from 'react-router-dom';
import React from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
const NavBar = () => {


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
                <NavLink to="/ProfileInfo">Personal Info</NavLink>
            </li>
            <li>
                <NavLink to="/Election">Elections</NavLink>
            </li>
            <li>
                <NavLink to='/Contact'>Contact</NavLink>
            </li>
            <li>
                <NavLink to="/votingPannel">Vote</NavLink>
            </li>
        </ul>
    </div>
  )
}


export default NavBar