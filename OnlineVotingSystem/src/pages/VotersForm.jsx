import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import constituency from "../utility/constituency.jsx"

const VotersForm = () => {
  const navigate = useNavigate();
  
  const [voterDetails, setVoterDetails] = useState({
    aadharNumber: "",
    firstName: "",
    lastName: "",
    midName: "",
    dob: "",
    gender: "",
    address: "",
    email: "",
    mobileNumber:"",
    constituency: "",
    state:"",
    password: "",
    image:"",
    fmName:""
  });
  const [selectedFile,setSelectedFile] = useState(null)
  const inputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setVoterDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitInfo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("aadharNumber", voterDetails.aadharNumber);
    formData.append("firstName", voterDetails.firstName);
    formData.append("midName", voterDetails.midName);
    formData.append("lastName", voterDetails.lastName);
    formData.append("dob", voterDetails.dob);
    formData.append("password", voterDetails.password);
    formData.append("gender", voterDetails.gender);
    formData.append("mobileNumber", voterDetails.mobileNumber);
    formData.append("address", voterDetails.address);
    formData.append("email", voterDetails.email);
    formData.append("fmName",voterDetails.fmName);
    formData.append("constituency",voterDetails.constituency);
    formData.append("state",voterDetails.state);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }
       
    try {
      const res= await axios.post(`${import.meta.env.VITE_URL}/voters/register`,
        formData,
        {headers: {
          "Content-Type": "multipart/form-data",
        }})
       
        if(res.data=="success"){
          toast.success("successfully added", {
            position: "top-center",
          });
          navigate("/userLogin");
        }
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className=" 
    flex flex-col
    pt-20 h-screen 
     border-2 
    border-red-400 
    pl-20
     "
    >
      <b className="flex justify-center items-2xl">Voters Details</b>
      <form onSubmit={submitInfo} className=" grid grid-cols-3 gap-8 p-4">
        <div className="flex flex-col">
          <label htmlFor="" className="flex gap-4">
            Aadhar Number
          </label>
          <input
            type="text"
            name="aadharNumber"
            placeholder="Enter your aaddhar number"
            id=""
            className="border-2 outline-none 
                border-green-500 pl-2 "
            onChange={inputEvent}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="flex gap-4">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            id=""
            className="border-2 outline-none
             border-green-500 pl-2 "
            onChange={inputEvent}
          />
        </div>
        <div className="flex flex-col">
          <label  className="flex gap-4">
            Middle Name
          </label>
          <input
            type="text"
            name="midName"
            placeholder="Enter middle name"
            id=""
            className="border-2 outline-none
                 border-green-500 pl-2 "
            onChange={inputEvent}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="flex gap-4">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            id=""
            className="border-2 outline-none
                 border-green-500 pl-2 "
            onChange={inputEvent}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="flex gap-4">
            DOB
          </label>
          <input
            type="date"
            name="dob"
            placeholder="Enter your dob"
            id=""
            className="border-2 outline-none
                 border-green-500 pl-2 "
            onChange={inputEvent}
          />
        </div>
        <div className="flex flex-col">
          <label  className="flex gap-4">
            Password
          </label>
          <input
            type="text"
            name="password"
            placeholder="Enter password"
            id=""
            className="border-2 outline-none
                  border-green-500 pl-2 "
            onChange={inputEvent}
           
          />
        </div>
        <div className="flex flex-col">
          <label  className="flex gap-4">
            Image
          </label>
          <input
            type="file"
            name="image"
            id=""
            className="border-2 outline-none 
                border-green-500 pl-2 rounded
                 bg-slate-500"
            onChange={(e)=>{setSelectedFile(e.target.files[0])}}
          />
        </div>
        <span htmlFor="" className="flex gap-4  items-center">
          Gender
          <input 
          type="radio"
           name="gender" 
           id="" 
           value={"1"}
           onChange={inputEvent} />
          <label >Male</label>
          <input type="radio"
           name="gender"
            id=""
            value={"0"}
            onChange={inputEvent} />
          <label htmlFor="">Female</label>
        </span>

        <div className="flex flex-col">
          <label  className="flex gap-4">
            Email
          </label>
          <input
            type="email"
            name="email"
            id=""
            className="border-2 outline-none
                   border-green-500 pl-2 h-6"
            placeholder="Enter email"
            onChange={inputEvent}
          />
        </div>
        <div className="flex flex-col">
          {/* <label htmlFor="" className="flex gap-4">
            Phone Number
          </label>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter phone number"
            id=""
            className="border-2 outline-none
                  border-green-500 pl-2 "
            onChange={inputEvent}
          /> */}
        <label htmlFor="">State</label>
        <select
          id="country-state"
          name="state"
          onChange={inputEvent}
          className="outline-none pl-2  h-8 border-green-500 border-2 "
        >
          <option value="">Select State</option>
          <option value="Andaman and Nicobar Islands">
            Andaman and Nicobar Islands
          </option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
          <option value="Daman and Diu">Daman and Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Ladakh">Ladakh</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Madhaya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Puducherry">Puducherry</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Constituency</label>
          <select
          id="country-state"
          name="constituency"
          onChange={inputEvent}
          className="outline-none pl-2  h-8 border-green-500 border-2 "
        >
          <option value="">select constituency</option>
         { 
         constituency.up.map((value)=>{
          if(voterDetails.state == "Uttar Pradesh")
            return <option value={value}>{value}</option>
         })
        }
        {
          constituency.AndhraPradesh.map((value)=>{
          
            if(voterDetails.state == "Andhra Pradesh"){
              return <option value={value}>{value}</option>
            }
          })
        }
        {
          constituency.Uttarakhand.map((value)=>{
          
            if(voterDetails.state == "Uttarakhand"){
              return <option value={value}>{value}</option>
            }
          })
        }
        {
          constituency.westBengal.map((value)=>{
          
            if(voterDetails.state == "West Bengal"){
              return <option value={value}>{value}</option>
            }
          })
        }
        {
          constituency.ArunachalPradesh.map((value)=>{
          
            if(voterDetails.state == "Arunachal Pradesh"){
              return <option value={value}>{value}</option>
            }
          })
        }
        {
          constituency.Assam.map((value)=>{
          
            if(voterDetails.state == "Assam"){
              return <option value={value}>{value}</option>
            }
          })
        }
        {
          constituency.Goa.map((value)=>{
          
            if(voterDetails.state == "Goa"){
              return <option value={value}>{value}</option>
            }
          })
        }
         {
          constituency.Gujarat.map((value)=>{
          
            if(voterDetails.state == "Gujarat"){
              return <option value={value}>{value}</option>
            }
          })
        }
        
          
        </select>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="" className="flex gap-4">
            Father/Mother Name
          </label>
          <input
            type="text"
            name="fmName"
            placeholder="Enter father/mother name"
            id=""
            className="border-2 outline-none
                  border-green-500 pl-2 "
            onChange={inputEvent}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="flex gap-4">
            Mobile Number
          </label>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter your mobile number"
            id=""
            className="border-2 outline-none
                  border-green-500 pl-2 "
            onChange={inputEvent}
          />
        </div>
        <div className="flex flex-col">
          <label>Address</label>
          <textarea
          type="text"
          rows="2"
          cols="30"
          name="address"
          className="border-2
                 border-green-500 p-2"
          placeholder="Enter your permanent address"
          onChange={inputEvent}
          ></textarea>
        </div>
        <div
          className="flex justify-evenly 
        h-12 w-[600px]  "
        >
          <button
            type="submit"
            className="border-2 bg-blue-200 rounded-xl p-2 pl-4 pr-4"
          >
            Submit
          </button>
          <NavLink
            to="/adminLogin"
            className="border-2 bg-blue-200 rounded-xl p-2 pl-4 pr-4"
          >
            Back
          </NavLink>
        </div>
      </form>
    </div>
  );
};
export default VotersForm;
