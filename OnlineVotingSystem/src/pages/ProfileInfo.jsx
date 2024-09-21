import React, { useContext, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ProfileInfo = () => {
  var location = useLocation();
  const [info,setInfo] = useState(location.state.data);

    // var inf = JSON.parse(localStorage.getItem("user"));
    // console.log(inf)
  

  const [eligible, setEligible] = useState(false);
  const [age, setAge] = useState();
  // const info = location.state.data;

  useEffect(() => {

    const voter_birth_year = info.dob.substring(0, 4);
    const current_year = new Date().getFullYear();
    setAge(current_year - voter_birth_year);
    if (current_year - voter_birth_year >= 18) {
      setEligible(true);
    }
  },[location]);

  return (
    <>
      <div className="flex justify-center items-center w-screen h-[38.8rem] gap-[12rem] bg-black relative top-20 ">
        <div className="flex flex-col gap-8">
          <img
            className="border-2 border-blue-600 h-40 w-40 rounded-full"
            src={`${info.image}`}
            alt="display soon..."
          />
          <span className="bg-blue-900 p-2 text-white">
            Change profile picture
          </span>
          <div className="flex gap-3 items-center border-black border-2">
            <CiEdit className="text-3xl text-white" />
            <span className="text-white">Edit Profile</span>
          </div>
        </div>

        <div className="flex flex-col gap-[2rem] h-[30rem] w-[30rem]  p-[1rem]">
          <div className="flex flex-col ">
            <span className="text-[.8rem] text-blue-900 font-bold ">Name</span>
            <span className="text-white">
              {`${info.firstName} ${info.midName} ${info.lastName}`}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[.8rem] text-blue-900  font-bold">
              Father/Mother Name
            </span>
            <span className="text-white">{info.fmName}</span>
          </div>
          <div className="flex justify-between ">
            <div className="flex flex-col">
              <span className="text-[.8rem] text-blue-900 font-bold ">Age</span>
              <span className="text-white">{`${age}`}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[.8rem] text-blue-900 font-bold">
                Mobile Number
              </span>
              <span className="text-white">{`${location.state.data.mobileNumber}`}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[.8rem] text-blue-900  font-bold">Email</span>
            <span className="text-white">{`${location.state.data.email}`}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[.8rem] text-blue-900 font-bold ">
              Aadhar Number
            </span>
            <span className="text-white">{`${location.state.data.aadharNumber}`}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[.8rem] text-blue-900  font-bold">
              Address
            </span>
            <span className="text-white">{`${location.state.data.address}`}</span>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-[.8rem] text-blue-900  font-bold">
                Eligible
              </span>
              <span className="text-white">{eligible ? "true" : "false"}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[.8rem] text-blue-900 font-bold ">
                Verifiable
              </span>
              <span className="text-white">true</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
