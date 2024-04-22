import React from 'react'
import { CiEdit } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const ProfileInfo = () => {
  return (
    <div className='w-screen h-screen border-4 '>
        <ul className=' border-4 border-blue-700 flex  gap-16 w-screen h-20 justify-end items-center pr-40 '>
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
                <navLink to="/vote">Vote</navLink>
            </li>
        </ul>
        <div className='grid  grid-cols-2 justify-items-center h-screen place-content-center  ' >
            <div className='flex flex-col gap-8'>
                <img 
                className="border-2 border-blue-600 h-40 w-40 rounded-full"
                src="OnlineVotingSystem\public\R.jpeg" alt="display soon..." />
                <span className='bg-blue-900 p-2 text-white'>Change profile picture</span>
                <div className='flex gap-3 items-center border-black border-2'>
                    <CiEdit className='text-3xl'/>
                    <span className=''>Edit Profile</span>
                </div>
            </div>

            <div className='flex flex-col gap-2 w-96 border-2'>
                <span>Name</span>
                <span>John</span>
                <span>Father/Mother Name</span>
                <div className='flex justify-between border-2'>
                <span>Age</span>
                <span>Mobile Number</span>
                </div>
                <span>Email</span>
                <span>Aadhar Number</span>
                <span>Address</span>
                <div className='flex justify-between'><span>Eligible</span> 
                <span>Verifiable</span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ProfileInfo