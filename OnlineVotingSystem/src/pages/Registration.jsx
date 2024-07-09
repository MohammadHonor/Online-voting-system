import {  useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Registration() {
    const navigate = useNavigate();

    const [votersDetails, setVotersDetails] = useState({
        name: '',
        dob: '',
        fmName: '',
        email: '',
        mobNumber: '',
        password: '',
        rePassword: '',
        aadharNumber: ''

    })
    const inputEvent = (e) => {
       
        const { value, name } = e.target;
       
        setVotersDetails((prev) => {
            if (name == 'name') {
                return {
                    name: value,
                    dob: prev.dob,
                    fmName: prev.fmName,
                    email: prev.email,
                    mobNumber: prev.mobNumber,
                    password: prev.password,
                    rePassword: prev.rePassword,
                    aadharNumber:prev.aadharNumber

                }
            }
            else if (name == 'dob') {
                return {
                    name: prev.name,
                    dob: value,
                    fmName: prev.fmName,
                    email: prev.email,
                    mobNumber: prev.mobNumber,
                    password: prev.password,
                    rePassword: prev.rePassword,
                    aadharNumber:prev.aadharNumber
                }
            }
            else if (name == 'fmName') {
                return {
                    name: prev.name,
                    dob: prev.dob,
                    fmName: value,
                    email: prev.email,
                    mobNumber: prev.mobNumber,
                    password: prev.password,
                    rePassword: prev.rePassword,
                    aadharNumber:prev.aadharNumber
                }


            }
            else if (name == 'email') {
                return {
                    name: prev.name,
                    dob: prev.dob,
                    fmName: prev.fmName,
                    email: value,
                    mobNumber: prev.mobNumber,
                    password: prev.password,
                    rePassword: prev.rePassword,
                    aadharNumber:prev.aadharNumber
                }
            }
            else if (name == 'mobNumber') {
                return {
                    name: prev.name,
                    dob: prev.dob,
                    fmName: prev.fmName,
                    email: prev.email,
                    mobNumber: value,
                    password: prev.password,
                    rePassword: prev.rePassword,
                    aadharNumber:prev.aadharNumber
                }


            }
            else if (name == 'password') {
                return {
                    name: prev.name,
                    dob: prev.dob,
                    fmName: prev.fmName,
                    email: prev.email,
                    mobNumber: prev.mobNumber,
                    password: value,
                    rePassword: prev.rePassword,
                    aadharNumber:prev.aadharNumber
                }
            }
            else if (name == 'rePassword') {
                return {
                    name: prev.name,
                    dob: prev.dob,
                    fmName: prev.fmName,
                    email: prev.email,
                    mobNumber: prev.mobNumber,
                    password: prev.password,
                    rePassword: value,
                    aadharNumber:prev.aadharNumber
                }
            }
            else if(name=='aadharNumber'){
                return{
                    name:prev.name,
                    dob:prev.dob,
                    fmName:prev.fmName,
                    email:prev.email,
                    mobNumber:value,
                    password:prev.password,
                    rePassword:prev.rePassword,
                    aadharNumber:value
                }
        
        
            }

        }
        )
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("handler running")
        axios
        .post('https://online-voting-system-backend-ds6j.onrender.com/api/v1/voters/register',{
            name:votersDetails.name,
            dob:votersDetails.dob,
            fmName:votersDetails.fmName,
            email:votersDetails.email,
            mobNumber:votersDetails.mobNumber,
            aadharNumber:votersDetails.aadharNumber,
            password:votersDetails.password,
            rePassword:votersDetails.rePassword,

           })
        .then((req,res)=>{
            
            console.log(result)})
        .catch(err=>{console.log(err)
            
        })
    }
    
    return <div
        className="
        grid grid-cols-2 
        justify-items-center
        items-center 
        bg-slate-900 ml-80">
        <div
            className="  
        w-96 h-96
      text-white 
      ">
            <img
                className="
                rounded shadow-lg 
                shadow-cyan-500/50
                w-96 h-96 "
                src="./stock-vector-registration-abstract-concept-vector-illustration-registration-page-name-and-password-field-fill-1856790145.jpg"
                alt="" srcset=""
            />
        </div>
        <div
            className="flex">
            <form
                id="form"
                onSubmit={submitHandler} action=""
                className="
                w-screen h-screen 
                flex flex-col gap-4 
                justify-center items-center">
                <p
                    className="font-bold
                    text-white text-3xl">
                    Registration form
                </p>
                <div className="flex flex-col w-80 ">
                    <label htmlFor="user-name"
                        className="text-white">Name </label>
                    <input
                        type="text"
                        className="outline-none "
                        name="name"
                        id="user-name"
                        onChange={inputEvent}
                        value={votersDetails.name}
                   
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
                        name="dob"
                        id="dob"
                        onChange={inputEvent}
                        value={votersDetails.dob}
                         />
                </div>
                <div
                    className="flex 
                    flex-col w-80 ">
                    <label
                        htmlFor="fmName"
                        className="text-white"
                    >Father/ Mother Name
                    </label>
                    <input
                       
                        type="text"
                        className="border-0 outline-none "
                        name="fmName"
                        id="fm-name"
                        onChange={inputEvent}
                        value={votersDetails.fmName}
                    />
                </div>
                <div
                    className="
                    flex flex-col w-80 
                    ">
                    <label
                        htmlFor="email"
                        className="text-white"
                    >Email
                    </label>
                    <input
                        
                        type="email"
                        className="border-0 
                        outline-none "
                        name="email"
                        id="email"
                        onChange={inputEvent}
                        value={votersDetails.email}
                         />
                </div>
                <div className="flex flex-col w-80 ">
                    <label
                        htmlFor="M-number"
                        className="text-white"
                    >Mobile Number
                    </label>
                    <input
                        
                        type="text"
                        className="border-0 outline-none "
                        name="mobNumber" id="M-number"
                        onChange={inputEvent}
                        value={votersDetails.mobNumber} />
                </div>
                <div
                    className="flex flex-col w-80 "
                >

                    <label htmlFor="pass"
                        className="text-white"
                    >Password
                    </label>
                    <input
                        type="password"
                        className="border-0 outline-none "
                        name="password"
                        id="ass"
                        onChange={inputEvent}
                        value={votersDetails.password}

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
                        type="text"
                        className="border-0 outline-none "
                        name="rePassword" id="re-pass"
                        onChange={inputEvent}
                        value={votersDetails.rePassword} />
                </div>
                <div
                    className="flex flex-col w-80 ">
                    <label htmlFor="A-num" className="text-white">
                        Aadhar Number
                    </label>
                    <input
                        
                        className="border-0 outline-none  "
                        name="aadharNumber" id="A-num" 
                        onChange={inputEvent}
                        value={votersDetails.aadharNumber}/>
                </div>
                <div className="flex flex-cols gap-4 text-white">
                <button
                    type="submit"

                    className="shadow-lg shadow-cyan-500/50 bg-blue-700 w-20 rounded p-2 pl-4 pr-4text-white"
                >Submit
                </button>
                <input
                type="reset"
               value="Reset"
                className="shadow-lg shadow-cyan-500/50 bg-blue-700 w-20 rounded p-2 pl-4 pr-4text-white"
                />
                </div>
                </form>
        </div>
    </div>
}
