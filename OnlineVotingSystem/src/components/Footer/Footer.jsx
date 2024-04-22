import React from 'react'
import { FaFacebook, } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { IoIosSend } from "react-icons/io";


const Footer = ({color}) => {
    return (
        <div className='
        bg-slate-900
        grid
        justify-items-stretch
      gap-20
     border-t-2
     border-solid
   border-white
    grid-cols-3 
    p-20 
    ml-80'>
            <div className=' border-blue-900 
            flex flex-col gap-4  border-r-2'>
                <span className='flex flex-col text-white'>
                    <b className={`${color} `}>Contact</b>
                    <b>RD Engineering College</b>
                    <b>Ghaziabad</b>
                </span>
                <span className='flex flex-col text-white'>
                    <b className={`${color}`}>Helpline</b>
                    <b>+918115716390</b>
                    <b>+919084606156</b>
                </span>
                <span className='flex flex-col text-white'>
                    <span className={`${color} font-bold`}>Email</span>
                    <b>md.sharufali@987gmail.com</b>
                    <b>ansh38974@gmail.com</b>
                </span>
            </div>



            <div className='grid justify-items-start border-r-2 border-solid border-blue-900'>
                <div className='flex  gap-8 text-white'>
                    <span className='flex flex-col '>
                        <span className={`${color} font-bold`}>GetIn</span>
                        <NavLink to="/Registration" className={`font-bold`}>Register</NavLink>
                        <NavLink to='/Login' className={`font-bold`}>Login</NavLink>
                    </span>
                    <span className='flex flex-col'>
                    <span className={`${color} font-bold`}>Know more</span>
                        <NavLink to="/features" className={`font-bold`}>Featues</NavLink>
                        <NavLink to='/Steps' className={`font-bold`}>Steps</NavLink>
                    </span>
                    <span className='flex flex-col'>
                        <span className={`${color} font-bold`}>follow Us</span>
                        <NavLink to="" className={'font-bold'}>Facebook</NavLink>
                        <NavLink to="" className={'font-bold'}>Instagram</NavLink>
                        <NavLink to="" className={'font-bold'}>Twitter</NavLink>
                    </span>
                </div>

                <div  className='
                flex justify-center gap-8 '>
                    <FaFacebook className='w-12 h-12 text-white' />
                    <AiFillTwitterCircle className='w-12 h-12 text-white'/>
                    <FaInstagramSquare className='w-12 h-12 text-white'/>

                </div>
                <p className='font-bold text-center text-white'>Created by Mohammad Sharuf Ali</p>
            </div>
            <div className='flex flex-col  gap-2'>
                <b className={`${color} text-white`}>Quick Feedback:</b>
                <input type="text" className='h8- outline-none'></input>
                <input type="textarea" className='h-40 outline-none'></input>
                <div className='flex  justify-end'>
                <button className=' bg-blue-500 text-white  text-2xl w-28'>
                <IoIosSend className='text-white text-4xl inline-block '/>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Footer