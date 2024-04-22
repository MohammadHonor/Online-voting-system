
import React from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
const NavBar = () => {


  return (<>
    <div className=" 
    z-50 fixed top-0
     flex h-20 
     bg-blue-950
     justify-between items-center 
     w-screen 
     pl-10 pr-10
     border-b-2 border-green-500
    ">
      <IoReorderThreeOutline
        className='text-4xl 
      text-white cursor-pointer'
      />
      <div className={`flex text-white gap-40 `}>
        {/* <NavLink
          to="/About"
        >About</NavLink>
        <NavLink
          to="/Contact"
        >Contact</NavLink>
        <NavLink
          to="/Login"
        >Login</NavLink> */}
      </div>
    </div>
  </>
  )
}


export default NavBar