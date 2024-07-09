import axios from 'axios';
import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const Login = ({ props }) => {
   
    const navigate = useNavigate();
    const emailUseRef=useRef('');
    const passUseRef = useRef('');
     
    const [user, setUser] = useState({
        password: '',
        email: ''
    })
    
    const inputEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((prev) => {
            return{...prev,[name]:value}
        })
    }
    const submitLogin = (e) => {
        e.preventDefault();
        
        if (props == "User") {
            axios
                .post("http://localhost:8080/api/v1/voters/login", {
                    password: user.password,
                    email: user.email
                })
                .then((req,res) => {
                    console.log(req);
                    
                    if (req.data) {
                        toast.success("You are successfully login", {
                            position: 'top-center',
                        })
                        navigate("/ProfileInfo")
                    }

                })
                .catch(error => console.log("router error" + error))
        }
        else if (props == 'Admin') {
            axios
                .post("http://localhost:8080/api/admin/login", {
                    password: user.password,
                    email: user.email,
                })
                .then((res, req) => {
                    console.log(res)
                if (res.data) {
                        toast.success("Successfully login");
                        navigate("/adminPannel");
                       
                    }

                })
                .catch(err => { console.log(err) })

        }
    }

    return (
        <div className=" 
        flex
        bg-black
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

            />
            <form
                onSubmit={submitLogin}
                className="   flex flex-col gap-3 w-80 ">
                <p className="
                 font-bold text-white 
                 text-3xl"
                >
                    {props} Login</p>
                <div className="flex flex-col "
                >
                    <label htmlFor="email"
                        className="text-white"

                    >
                        Email
                    </label>
                    <input type="email"
                        ref={emailUseRef}
                        className="border-0  pl-4 outline-none "
                        name="email" id="email"
                        onChange={inputEvent}
                        
                        />
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="pass"
                        className="text-white"
                    >Password
                    </label>
                    <input
                        type="password"
                        // ref={passUseRef}
                        className="border-0  pl-4 outline-none "
                        name="password" id="ass"
                        onChange={inputEvent}
                        ref={passUseRef}
                    />
                </div>

                <div>
                    <NavLink
                        to="/forgetPassword"
                        className='text-blue-700 cursor-pointer'>
                        Forget Password ?
                    </NavLink>
                </div>
                <div className='flex gap-2'>
                    <span
                        className='text-white'>
                        Not a {props}?
                    </span>


                    <NavLink
                        to={`${props == 'User' ? "/voters/register" : "/admin/register"}`}
                        className='text-blue-700 cursor-pointer'
                    >Register now
                    </NavLink>

                </div>


                <button
                    type='submit'
                    // to="/adminPannel"
                    className="shadow-lg
                   shadow-cyan-500/50 
                    bg-blue-700 w-40 P-1 pl-4 pr-4
                     text-white text-center"
                >LOGIN
                </button>
            </form>

        </div>


    )
}

export default Login;