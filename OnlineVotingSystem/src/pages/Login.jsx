import axios from "axios";
import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ props }) => {
  const navigate = useNavigate();
  const emailUseRef = useRef(null);
  const passUseRef = useRef(null);
  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  const inputEvent = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    // setUser((prev) => {
    //   return { ...prev, [name]: value };
    // });
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
    
  };
  const submitLogin = (e) => {
    e.preventDefault();
    if (props == "User") {
      axios
        .post(`${import.meta.env.VITE_URL}/voters/login`, {
          password: user.password,
          email: user.email,
        },{
          withCredentials:true
        })
        .then((res) => {
         var info = res.data;
         console.log(info)
          if (res.data) {
            toast.success("You are successfully login", {
              position: "top-center",
            });
            // localStorage.setItem("user",JSON.stringify(info));
            navigate("/ProfileInfo", {
              state: { data: info },
            });
          }
        })
        .catch((error) => console.log("router error" + error));
    } else if (props == "Admin") {
      axios
        .post(`${import.meta.env.VITE_URL}/api/admin/login`, {
          password: user.password,
          email: user.email,
        },{
          withCredentials:true
        })
        .then((res) => {
          console.log(res.data)
          if (res.data) {
            toast.success("Successfully login");
            navigate("/adminPannel");
          }
        })
        .catch((err) => {
          toast.error("Not Registerd")
          navigate("/adminLogin");
          console.log(err);
        });
    }
    emailUseRef.current.value = "";
    passUseRef.current.value = "";
  };

  return (
    <div
      className=" 
        flex
        bg-black
        gap-10
        w-screen
        h-screen
        flex-row-wrap
        justify-center
        items-center     
         "
    >
      <img
        className=" rounded
                 shadow-cyan-500/50 shadow-2xl 
                   w-96 h-96"
        src="./login-concept-illustration_114360-739.avif"
      />
      <form onSubmit={submitLogin} className="   flex flex-col gap-3 w-80 ">
        <p
          className="
                 font-bold text-white 
                 text-3xl"
        >
          {props} Login
        </p>
        <div className="flex flex-col ">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
             ref={emailUseRef}
            placeholder="Enter your email"
            className="border-0  pl-4 outline-none "
            name="email"
            id="email"
            value={user.email}
            onChange={inputEvent}
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="pass" className="text-white">
            Password
          </label>
          <input
            type="password"
             ref={passUseRef}
            placeholder="Enter password"
            className="border-0  pl-4 outline-none "
            name="password"
            id="ass"
            value={user.password}
            onChange={inputEvent}
          />
        </div>

        <div>
          <NavLink
            to="/forgetPassword"
            className="text-blue-700 cursor-pointer"
          >
            Forget Password ?
          </NavLink>
        </div>
        <div className="flex gap-2">
          <span className="text-white">Not a {props}?</span>

          <NavLink
            to={`${props == "User" ? "/voters/register" : "/admin/register"}`}
            className="text-blue-700 cursor-pointer"
          >
            Register now
          </NavLink>
        </div>

        <button
          type="submit"
          className="shadow-lg
                   shadow-cyan-500/50 
                    bg-blue-700 w-40 P-1 pl-4 pr-4
                     text-white "
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export { Login };

