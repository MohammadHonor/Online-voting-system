import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Registration() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [repass, setRepass] = useState();
    const [aadhar, setAadhar] = useState();
    const [mob, setMob] = useState();
    const [dob, setDob] = useState();
    const [parent, setParent] = useState();


    const submitHandler=(e)=>{
     e.preventDefault();
    axios
    .post('http://localhost:8080/vote',{
        name,
        dob,
        email,
        parent,
        mob,        
        pass,
        repass,     
        aadhar})
    .then((result)=>console.log(result))
    .catch(err=>{console.log(err)
        navigate('/Login')
    })
    }

    


    const navigate = useNavigate();

    return <div
        className="grid grid-cols-2 justify-items-center items-center  bg-slate-900 ml-80">
        <div
            className=" w-96 h-96  text-white ">
            <img
                className=" rounded shadow-lg  shadow-cyan-500/50 w-96 h-96 "
                src="./stock-vector-registration-abstract-concept-vector-illustration-registration-page-name-and-password-field-fill-1856790145.jpg"
                alt="" srcset=""
            />
        </div>
        <div
            className="flex">
            <form
                onSubmit={submitHandler} action=""
                className="  w-screen h-screen flex flex-col gap-4 justify-center items-center">
                <p
                    className="font-bold text-white text-3xl">
                    Registration form
                </p>
                <div className="flex flex-col w-80 ">
                    <label htmlFor="user-name"
                        className="text-white">Name </label>
                    <input
                        type="text"
                        className="outline-none "
                        name="username"
                        id="user-name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div
                    className="flex flex-col  w-80">
                    <label
                        htmlFor="dob"
                        className="text-white"
                    >
                        Date of birth</label>
                    <input
                        type="date"
                        className="border-0 outline-none "
                        name="userdob"
                        id="dob" onChange={(e) => setDob(e.target.value)} />
                </div>
                <div
                    className="flex flex-col w-80 ">
                    <label
                        htmlFor="fm-name"
                        className="text-white">Father/ Mother Name</label>
                    <input
                        onChange={(e) => setParent(e.target.value)} type="text"
                        className="border-0 outline-none " name="user-father-mother" id="fm-name"
                    />
                </div>
                <div
                    className="flex flex-col w-80 ">
                    <label
                        htmlFor="email"
                        className="text-white"
                    >Email
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)} type="email"
                        className="border-0 outline-none "
                        name="email" id="email" />
                </div>
                <div className="flex flex-col w-80 ">
                    <label htmlFor="M-number"
                        className="text-white">Mobile Number</label>
                    <input onChange={(e) => setMob(e.target.value)} type="text"
                        className="border-0 outline-none "
                        name="user-mobile-num" id="M-number" />
                </div>
                <div className="flex flex-col w-80 ">
                    <label htmlFor="pass"
                        className="text-white">Password </label>
                    <input
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        className="border-0 outline-none "
                        name="password"
                        id="ass"
                    />
                </div>
                <div
                    className="flex flex-col w-80 "
                >
                    <label
                        htmlFor="re-pass"
                        className="text-white">
                        Re enter password
                    </label>
                    <input
                        onChange={(e) => setRepass(e.target.value)}
                        type="text"
                        className="border-0 outline-none "
                        name="re-enter-password" id="re-pass" />
                </div>
                <div
                    className="flex flex-col w-80 ">
                    <label htmlFor="A-num" className="text-white">
                        Aadhar Number
                    </label>
                    <input
                        onChange={(e) => setAadhar(e.target.value)} type="text"
                        className="border-0 outline-none  "
                        name="aadhar-number" id="A-num" />
                </div>

                <button
                type="submit"
                   
                    className="shadow-lg shadow-cyan-500/50 bg-blue-700 w-20 rounded p-2 pl-4 pr-4text-white"
                >Submit
                </button>
            </form>
        </div>
    </div>
}