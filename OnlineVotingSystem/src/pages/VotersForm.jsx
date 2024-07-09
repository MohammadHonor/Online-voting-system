import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const VotersForm = () => {
    const navigate=useNavigate();
    const [voterDetails, setVoterDetails] = useState({
        voter_id: '',
        login_id: '',
        aadharNumber: '',
        firstName: '',
        lastName: '',
        midName: '',
        dob: '',
        gender: '',
        address: '',
        email: '',
        mobileNumber: '',
        password: '',
        textArea: ''

    })

    const inputEvent = (e) => {

        const value = e.target.value;
        const name = e.target.name;
        console.log(e.target.value)

        setVoterDetails((prev) => {
            if (name == 'voter_id') {
                return {
                    voter_id: value,
                    login_id: prev.login_id,
                    aadharNumber: prev.aadharNumber,
                    firstName: prev.firstName,
                    lastName: prev.lastName,
                    midName: prev.midName,
                    dob: prev.dob,
                    gender: prev.gender,
                    address: prev.address,
                    email: prev.email,
                    mobileNumber: prev.mobileNumber,
                    password: prev.password,
                    textArea: prev.textArea

                }
            }
            else if (name == 'login_id') {
                return {
                    voter_id: prev.voter_id,
                    login_id: value,
                    aadharNumber: prev.aadharNumber,
                    firstName: prev.firstName,
                    lastName: prev.lastName,
                    midName: prev.midName,
                    dob: prev.dob,
                    gender: prev.gender,
                    address: prev.address,
                    email: prev.email,
                    mobileNumber: prev.mobileNumber,
                    password: prev.password,
                    textArea: prev.textArea

                }
            }
            else if (name == 'aadharNumber') {
                return {
                    voter_id: prev.voter_id,
                    login_id: prev.login_id,
                    aadharNumber: value,
                    firstName: prev.firstName,
                    lastName: prev.lastName,
                    midName: prev.midName,
                    dob: prev.dob,
                    gender: prev.gender,
                    address: prev.address,
                    email: prev.email,
                    mobileNumber: prev.mobileNumber,
                    password: prev.password,
                    textArea: prev.textArea

                }
            }
            else if (name == 'firstName') {
                return {
                    voter_id: prev.voter_id,
                    login_id: prev.login_id,
                    aadharNumber: prev.aadharNumber,
                    firstName: value,
                    lastName: prev.lastName,
                    midName: prev.midName,
                    dob: prev.dob,
                    gender: prev.gender,
                    address: prev.address,
                    email: prev.email,
                    mobileNumber: prev.mobileNumber,
                    password: prev.password,
                    textArea: prev.textArea

                }
            }
            else if (name == 'lastName') {
                return {
                    voter_id: prev.voter_id,
                    login_id: prev.login_id,
                    aadharNumber: prev.aadharNumber,
                    firstName: prev.firstName,
                    lastName: value,
                    midName: prev.midName,
                    dob: prev.dob,
                    gender: prev.gender,
                    address: prev.address,
                    email: prev.email,
                    mobileNumber: prev.mobileNumber,
                    password: prev.password,
                    textArea: prev.textArea

                }
            }
            else if (name == 'midName') {
                return {
                    voter_id: prev.voter_id,
                    login_id: prev.login_id,
                    aadharNumber: prev.aadharNumber,
                    firstName: prev.firstName,
                    lastName: prev.lastName,
                    midName: value,
                    dob: prev.dob,
                    gender: prev.gender,
                    address: prev.address,
                    email: prev.email,
                    mobileNumber: prev.mobileNumber,
                    password: prev.password,
                    textArea: prev.textArea

                }
            }
            else if (name == 'dob') {
                return {
                    voter_id: prev.voter_id,
                    login_id: prev.login_id,
                    aadharNumber: prev.aadharNumber,
                    firstName: prev.firstName,
                    lastName: prev.lastName,
                    midName: prev.midName,
                    dob: value,
                    gender: prev.gender,
                    address: prev.address,
                    email: prev.email,
                    mobileNumber: prev.mobileNumber,
                    password: prev.password,
                    textArea: prev.textArea

                }
            }
            else if (name == 'gender') {
                return {
                    voter_id: prev.voter_id,
                    login_id: prev.login_id,
                    aadharNumber: prev.aadharNumber,
                    firstName: prev.firstName,
                    lastName: prev.lastName,
                    midName: prev.midName,
                    dob: prev.dob,
                    gender: value,
                    address: prev.address,
                    email: prev.email,
                    mobileNumber: prev.mobileNumber,
                    password: prev.password,
                    textArea: prev.textArea

                }
            }
            else if (name == 'email') {
                return {
                    voter_id: prev.voter_id,
                    login_id: prev.login_id,
                    aadharNumber: prev.aadharNumber,
                    firstName: prev.firstName,
                    lastName: prev.lastName,
                    midName: prev.midName,
                    dob: prev.dob,
                    gender: prev.gender,
                    address: prev.address,
                    email: value,
                    mobileNumber: prev.mobileNumber,
                    password: prev.password,
                    textArea: prev.textArea

                }
            }
            else if (name == 'address') {
                return {
                    voter_id: prev.voter_id,
                    login_id: prev.login_id,
                    aadharNumber: prev.aadharNumber,
                    firstName: prev.firstName,
                    lastName: prev.lastName,
                    midName: prev.midName,
                    dob: prev.dob,
                    gender: prev.gender,
                    address: value,
                    email: prev.email,
                    mobileNumber: prev.mobileNumber,
                    password: prev.password,
                    textArea: prev.textArea

                }
            }
            else if (name == 'mobileNumber') {
                return {
                    voter_id: prev.voter_id,
                    login_id: prev.login_id,
                    aadharNumber: prev.aadharNumber,
                    firstName: prev.firstName,
                    lastName: prev.lastName,
                    midName: prev.midName,
                    dob: prev.dob,
                    gender: prev.gender,
                    address: prev.address,
                    email: prev.email,
                    mobileNumber: value,
                    password: prev.password,
                    textArea: prev.textArea

                }
            }
            else if (name == 'password') {
                return {
                    voter_id: prev.voter_id,
                    login_id: prev.login_id,
                    aadharNumber: prev.aadharNumber,
                    firstName: prev.firstName,
                    lastName: prev.lastName,
                    midName: prev.midName,
                    dob: prev.dob,
                    gender: prev.gender,
                    address: prev.address,
                    email: prev.email,
                    mobileNumber: prev.mobileNumber,
                    password: value,
                    textArea: prev.textArea

                }
            }
            else if (name == 'textArea') {
                return {
                    voter_id: prev.voter_id,
                    login_id: prev.login_id,
                    aadharNumber: prev.aadharNumber,
                    firstName: prev.firstName,
                    lastName: prev.lastName,
                    midName: prev.midName,
                    dob: prev.dob,
                    gender: prev.gender,
                    address: prev.address,
                    email: prev.email,
                    mobileNumber: prev.mobileNumber,
                    password: prev.password,
                    textArea: value

                }
            }
        })
    }

    const submitInfo=(e)=>{
        e.preventDefault();
    //   console.log(voterDetails);
       axios
       .post("https://online-voting-system-backend-ds6j.onrender.com/api/v1/voters/register",{
        voter_id:voterDetails.voter_id,
        login_id:voterDetails.login_id,
        aadharNumber:voterDetails.aadharNumber,
        firstName:voterDetails.firstName,
        midName:voterDetails.midName,
        lastName:voterDetails.lastName,
        dob:voterDetails.dob,
        password:voterDetails.password,
        gender:voterDetails.gender,
        mobileNumber:voterDetails.mobileNumber,
        address:voterDetails.address,
        email:voterDetails.email
        
       })
        .then((res)=>{
        console.log(res);
        toast.success("successfully added",{
            position:"top-center"
        })
        navigate("/userLogin");
       })
            .catch((error)=>{
        console.log("serverError:"+error)
       })
    }
    return (<div
        className=" 
    flex flex-col
    pt-10 h-screen 
     border-2 
    border-red-400 
    ml-80 "
    >
        <b
            className="flex justify-center items-2xl"
        >Voters Details
        </b>
         <form onSubmit={submitInfo}
            className=" grid grid-cols-3 gap-8 p-4"> 

            <div className="flex flex-col">
            <label className="flex gap-4">
                Voter_Id
                </label>
            <input
                type="text"
                name="voter_id"
                id=""
                className="border-2 outline-none
             border-green-500 pl-2 "
                onChange={inputEvent}
                value={voterDetails.voter_id}
            />
            </div>
            <div className="flex flex-col">
            <label
                className="flex gap-4"
            > Login_Id </label>
            <input
                type="text"
                name="login_id"
                id=""
                className="border-2 outline-none
                 border-green-500 pl-2 "
                onChange={inputEvent}
                value={voterDetails.login_id}
            />

            </div>
            <div className="flex flex-col">
            <label
                htmlFor=""
                className="flex gap-4"
            >Aadhar_Id </label>
            <input
                type="text"
                name="aadharNumber"
                id=""
                className="border-2 outline-none 
                border-green-500 pl-2 "
                onChange={inputEvent}
                value={voterDetails.aadharNumber}
            />
            </div>
            <div className="flex flex-col">
            <label
                htmlFor=""
                className="flex gap-4"
            >First Name </label>
            <input
                type="text"
                name="firstName"
                id=""
                className="border-2 outline-none
             border-green-500 pl-2 "
                onChange={inputEvent}
                value={voterDetails.firstName}
            />

            </div>
            <div className="flex flex-col">
            <label
                htmlFor=""
                className="flex gap-4">
                Middle Name</label>
            <input type="text" name="midName"
                id=""
                className="border-2 outline-none
                 border-green-500 pl-2 "
                onChange={inputEvent}
                value={voterDetails.midName}
            />
            </div>
            <div className="flex flex-col">
            <label htmlFor="" className="flex gap-4">
                Last Name</label>
            <input type="text"
                name="lastName"
                id=""
                className="border-2 outline-none
                 border-green-500 pl-2 "
                onChange={inputEvent}
                value={voterDetails.lastName}
            />
            </div>
            <div className="flex flex-col">
            <label htmlFor="" className="flex gap-4">
                DOB </label>
            <input type="date"
                name="dob"
                id=""
                className="border-2 outline-none
                 border-green-500 pl-2 "
                onChange={inputEvent}
                value={voterDetails.dob}

            />
            </div>
            <div className="flex flex-col">
            <label htmlFor="" className="flex gap-4">
                Password </label>
            <input type="text"
                name="password"
                id=""
                className="border-2 outline-none
                  border-green-500 pl-2 "
                onChange={inputEvent}
                value={voterDetails.password}
            />
            </div>
            <div className="flex flex-col">
            <label htmlFor="" className="flex gap-4">
                Image</label>

                <input type="file"
                    name="voter_image" id=""
                    className="border-2 outline-none 
                border-green-500 pl-2 rounded
                 bg-slate-500"

                //  onChange={inputEvent}
                //  value={voterDetails.voter_image}
                />
            </div>
            <span htmlFor="" className="flex gap-4  items-center">
                Gender
                <input
                    type="radio"
                    name="gender"
                    id=""
                    onChange={inputEvent}
                    value={voterDetails.gender}
                />
                <label htmlFor="">
                    Male
                </label>

                <input
                    type="radio"
                    name="gender"
                    id=""
                    onChange={inputEvent}
                    value={voterDetails.gender}
                />
                <label htmlFor="">
                    Female
                </label>
            </span>
            
            <div className="flex flex-col">

            <label htmlFor="" className="flex gap-4">
                Email </label>
            <input
                type="email"
                name="email"
                id=""
                className="border-2 outline-none
                   border-green-500 pl-2 h-6"
                onChange={inputEvent}
                value={voterDetails.email}
            />

            </div>
          <div className="flex flex-col">
          <label htmlFor="" className="flex gap-4">
                Phone Number  </label>
            <input
                type="text"
                name="mobileNumber"
                id=""
                className="border-2 outline-none
                  border-green-500 pl-2 "
                onChange={inputEvent}
                value={voterDetails.mobileNumber}

            />
          </div>
          <div className="flex flex-col">
            <label>Address</label>
                <textarea
                    type="text"
                    rows="5"
                    cols="30"
                    name="textArea"
                    className="border-2
                   border-green-500 p-2"
                    placeholder="Enter your permanent address"
                    onChange={inputEvent}
                    value={voterDetails.textArea}
                />
            </div>
        <div className="flex justify-evenly relative top-20
        h-12 w-[600px]  ">
            <button type="submit" className="border-2 bg-blue-200 rounded-xl p-2 pl-4 pr-4">Submit</button>

            <input type="reset"
                value="Reset"
                className="border-2
            bg-blue-200 rounded-xl p-2 pl-4 pr-4"
            />
            <NavLink to="/adminLogin" className="border-2 bg-blue-200 rounded-xl p-2 pl-4 pr-4">Back</NavLink>

        </div>
         </form> 
    </div>)
}


export default VotersForm;
