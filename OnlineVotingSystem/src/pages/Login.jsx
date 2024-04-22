import React from 'react'
import { NavLink } from 'react-router-dom';
const Login = ({props}) => {
    return (
        <div className=" 
        flex
        bg-cyan-950
        gap-10
        w-screen
        h-screen
        flex-row-wrap
        justify-center
        items-center
         
        
         ">
           
            <img className=" rounded
                 shadow-cyan-500/50 shadow-2xl 
                   w-96 h-96"
                src="./login-concept-illustration_114360-739.avif"
                alt=""
                srcset=""
            />


            <form action=""
                className="   flex flex-col gap-3 w-80 ">
                <p className=" font-bold text-white text-3xl">
                    {props} Login</p>
                <div className="flex flex-col  "
                >
                    <label htmlFor="email"
                        className="text-white"
                    >
                        Email
                    </label>
                    <input type="email"
                        className="border-0  pl-4 outline-none "
                        name="email" id="email" />
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="pass"
                        className="text-white"
                    >Password
                    </label>
                    <input
                        type="password"
                        className="border-0  pl-4 outline-none "
                        name="password" id="ass" />
                </div>

                <div>
                    <span
                        className='text-blue-700 cursor-pointer'>
                        Forget Password ?
                    </span>
                </div>
                <div className='flex gap-2'>
                    <span
                        className='text-white'>
                        Not a {props}?
                    </span>

                    <NavLink
                    to="/register"
                        className='text-blue-700 cursor-pointer'
                    >Register now
                    </NavLink>

                </div>


                <NavLink
                to="/adminPannel"
                  className="shadow-lg
                   shadow-cyan-500/50 
                    bg-blue-700 w-40 P-1 pl-4 pr-4
                     text-white text-center"
                  >LOGIN
                  </NavLink>
            </form>

        </div>
        

    )
}

export default Login;