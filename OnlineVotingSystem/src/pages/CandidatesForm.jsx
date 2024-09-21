import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import constituency from "../utility/constituency";

const CandidatesForm = () => {
  const [selectedFile, setSelectedFile] = useState({
    prof_photo: "",
    party_flag: "",
  });
  const [candidate, setCandidate] = useState({
    partyName: "",
    name: "",
    dob: "",
    prof_photo: "",
    party_flag: "",
    gender: "",
    email: "",
    mobileNumber: "",
    state: "",
    constituency: "",
  });

  const inputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setCandidate((prev) => {
      return { ...prev, [name]: value };
    });
  };
 const fileHandler=(e)=>{
  const name = e.target.name;
  const value =e.target.files[0];
  setSelectedFile((prev)=>{
    return {...prev,[name]:value}
  })
 }

  const submitCandidate = async (err) => {
    err.preventDefault();
console.log(selectedFile);

    const formData = new FormData();

    formData.append("name", candidate.name);
    formData.append("partyName", candidate.partyName);
    formData.append("dob", candidate.dob);
    formData.append("gender", candidate.gender);
    formData.append("mobileNumber", candidate.mobileNumber);
    formData.append("state", candidate.state);
    formData.append("constituency", candidate.constituency);
    formData.append("email", candidate.email);
    formData.append("prof_photo", selectedFile.prof_photo);
    formData.append("party_flag", selectedFile.party_flag);

    axios
      .post(`${import.meta.env.VITE_URL}/api/candidate/register`, formData,
        {headers: {
        "Content-Type": "multipart/form-data",
      }})
      .then((res) => {
        console.log(res);
        toast.success("added successfully", {
          position: "top-left",
        });
      })
      .catch((err) => console.log("candidate" + err));
  };
  return (
    <form
      
      onSubmit={submitCandidate}
      className=" 
                    flex flex-col 
                    p-[8rem] h-screen 
                    w-screen border-2 
                    border-red-400 
                    pt-20
                
                     gap-4"
    >
      <b className="flex justify-center items-2xl">Candidate details</b>
      <div className="grid grid-cols-2 gap-12 p-4">
        <label className="flex flex-col">
          Name
          <input
            type="text"
            name="name"
            onChange={inputEvent}
            // value={candidate.name}
            placeholder="Enter your name"
            className="border-2 outline-none 
                border-green-500 pl-2 "
          />
        </label>
        <label htmlFor="" className="flex flex-col">
          {" "}
          Party Name
          <input
            type="text"
            name="partyName"
            onChange={inputEvent}
            // value={candidate.partyName}
            placeholder="Enter the Party Name"
            id=""
            className="border-2 outline-none
            border-green-500 pl-2 "
          />
        </label>
        <label htmlFor="" className="flex flex-col">
          <select
            name="state"
            onChange={inputEvent}
            className="border-2 outline-none
          border-green-500 pl-2 "
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
            <option value="Dadra and Nagar Haveli">
              Dadra and Nagar Haveli
            </option>
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
        </label>
        <label htmlFor="" className="flex flex-col">
          {" "}
          Constituency
          <select
            name="constituency"
            // value={candidate.constituency}
            className="border-2 outline-none
            border-green-500 pl-2 "
            onChange={inputEvent}
          >
            <option value="">select constituency</option>
            {constituency.up.map((value) => {
              if (candidate.state == "Uttar Pradesh")
                return <option value={value}>{value}</option>;
            })}
            {constituency.AndhraPradesh.map((value) => {
              if (candidate.state == "Andhra Pradesh") {
                return <option value={value}>{value}</option>;
              }
            })}
            {constituency.Uttarakhand.map((value) => {
              if (candidate.state == "Uttarakhand") {
                return <option value={value}>{value}</option>;
              }
            })}
            {constituency.westBengal.map((value) => {
              if (candidate.state == "West Bengal") {
                return <option value={value}>{value}</option>;
              }
            })}
            {constituency.ArunachalPradesh.map((value) => {
              if (candidate.state == "Arunachal Pradesh") {
                return <option value={value}>{value}</option>;
              }
            })}
            {constituency.Assam.map((value) => {
              if (candidate.state == "Assam") {
                return <option value={value}>{value}</option>;
              }
            })}
            {constituency.Goa.map((value) => {
              if (candidate.state == "Goa") {
                return <option value={value}>{value}</option>;
              }
            })}
            {constituency.Gujarat.map((value) => {
              if (candidate.state == "Gujarat") {
                return <option value={value}>{value}</option>;
              }
            })}
          </select>
        </label>
        <label htmlFor="" className="flex flex-col">
          DOB
          <input
            type="date"
            name="dob"
            id=""
            onChange={inputEvent}
            //value={candidate.dob}
            className="border-2 outline-none
                 border-green-500 pl-2 "
          />
        </label>

        <label htmlFor="" className="flex flex-col">
          Profile Photo
          <input
            type="file"
            name="prof_photo"
            id=""
            onChange={fileHandler}
            // value={candidate.image}
            className="border-2 outline-none
                  border-green-500 pl-2 rounded bg-slate-500"
          />
        </label>
        <label htmlFor="" className="flex flex-col">
          Party flag
          <input
            type="file"
            name="party_flag"
            id=""
            onChange={fileHandler}
            //value={candidate.image}
            className="border-2 outline-none
                  border-green-500 pl-2 rounded bg-slate-500"
          />
        </label>
        <span htmlFor="" className="flex flex-col">
          Gender
          <label htmlFor="">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={inputEvent}
              //  value={candidate.gender}
              id=""
            />
            Male
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={inputEvent}
              //value={candidate.gender}
              id=""
            />
            Female
          </label>
        </span>

        <label htmlFor="" className="flex flex-col">
          Email
          <input
            type="email"
            name="email"
            onChange={inputEvent}
            // value={candidate.email}
            placeholder="Enter email"
            id=""
            className="border-2 outline-none border-green-500 pl-2 h-6"
          />
        </label>

        <label htmlFor="" className="flex flex-col">
          Phone Number
          <input
            type="number"
            name="mobileNumber"
            onChange={inputEvent}
            // value={candidate.mobileNumber}
            placeholder="Enter mobile number"
            id=""
            className="border-2 outline-none border-green-500 pl-2 "
          />
        </label>
      </div>
      <div className="flex justify-around">
        <button
          type="submit"
          className="border-2
              bg-blue-200
               rounded-xl p-2
                pl-4 pr-4"
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
  );
};

export default CandidatesForm;
