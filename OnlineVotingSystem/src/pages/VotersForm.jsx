import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const VotersForm = () => {
    const navigate=useNavigate();
    const [voterDetails, setVoterDetails] = useState({
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
        image:''

    })

    const inputEvent = (e) => {

        const value = e.target.value;
        const name = e.target.name;
        setVoterDetails((prev)=>{
            return{...prev,[name]:value}
        })

   
    }

    const submitInfo=(e)=>{
        e.preventDefault();
    //   console.log(voterDetails);
       axios
       .post(`https://online-voting-system-backend-ds6j.onrender.com/api/v1/voters/register`,{
        // voter_id:voterDetails.voter_id,
        // login_id:voterDetails.login_id,
        aadharNumber:voterDetails.aadharNumber,
        firstName:voterDetails.firstName,
        midName:voterDetails.midName,
        lastName:voterDetails.lastName,
        dob:voterDetails.dob,
        password:voterDetails.password,
        gender:voterDetails.gender,
        mobileNumber:voterDetails.mobileNumber,
        address:voterDetails.address,
        
        
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
    pt-20 h-screen 
     border-2 
    border-red-400 
    pl-20
     "
    >
        <b
            className="flex justify-center items-2xl"
        >Voters Details
        </b>
         <form onSubmit={submitInfo}
            className=" grid grid-cols-3 gap-8 p-4"> 

            {/* <div className="flex flex-col"> */}
            {/* <label className="flex gap-4">
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
            /> */}
            {/* </div> */}
            {/* <div className="flex flex-col">
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

            </div> */}
            <div className="flex flex-col">
            <label
                htmlFor=""
                className="flex gap-4"
            >Aadhar Number </label>
            <input
                type="text"
                name="aadharNumber"
                id=""
                className="border-2 outline-none 
                border-green-500 pl-2 "
                onChange={inputEvent}
                // value={voterDetails.aadharNumber}
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
                // value={voterDetails.firstName}
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
                // value={voterDetails.midName}
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
                // value={voterDetails.lastName}
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
                // value={voterDetails.dob}

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
                    name="image" id=""
                    className="border-2 outline-none 
                border-green-500 pl-2 rounded
                 bg-slate-500"

                 onChange={inputEvent}
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
                    // value={voterDetails.gender}
                />
                <label htmlFor="">
                    Male
                </label>

                <input
                    type="radio"
                    name="gender"
                    id=""
                    onChange={inputEvent}
                    // value={voterDetails.gender}
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
                    name="address"
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

            {/* <input type="reset"
                value="Reset"
                className="border-2
            bg-blue-200 rounded-xl p-2 pl-4 pr-4"
            /> */}
            <NavLink to="/adminLogin" className="border-2 bg-blue-200 rounded-xl p-2 pl-4 pr-4">Back</NavLink>

        </div>
         </form> 
    </div>)
}
export default VotersForm;
