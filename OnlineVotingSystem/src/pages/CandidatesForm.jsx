import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';

const CandidatesForm = () => {
    const [candidate, setCandidate] = useState({
        candidateId: '',
        partyName: '',
        name: '',
        dob: '',
        image: '',
        gender: '',
        email: '',
        mobileNumber: ''
    })

    const inputEvent = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setCandidate((prev) => {

            if (name == 'candidateId') return {
                candidateId: value,
                partyName: prev.partyName,
                name: prev.name,
                dob: prev.dob,
                image: prev.image,
                gender: prev.gender,
                email: prev.email,
                mobileNumber: prev.mobileNumber

            }
            else if (name == 'partyName') return {
                candidateId: prev.candidateId,
                partyName: value,
                name: prev.name,
                dob: prev.dob,
                image: prev.image,
                gender: prev.gender,
                email: prev.email,
                mobileNumber: prev.mobileNumber
            }
            else if (name == 'name') return {
                candidateId: prev.candidateId,
                partyName: prev.partyName,
                name: value,
                dob: prev.dob,
                image: prev.image,
                gender: prev.gender,
                email: prev.email,
                mobileNumber: prev.mobileNumber
            }
            else if (name == 'dob') return {
                candidateId: prev.candidateId,
                partyName: prev.partyName,
                name: prev.name,
                dob: value,
                image: prev.image,
                gender: prev.gender,
                email: prev.email,
                mobileNumber: prev.mobileNumber
            }
            else if (name == 'image') return {
                candidateId: prev.candidateId,
                partyName: prev.partyName,
                name: prev.name,
                dob: prev.dob,
                image: value,
                gender: prev.gender,
                email: prev.email,
                mobileNumber: prev.mobileNumber
            }
            else if (name == 'gender') return {
                candidateId: prev.candidateId,
                partyName: prev.partyName,
                name: prev.name,
                dob: prev.dob,
                image: prev.image,
                gender: value,
                email: prev.email,
                mobileNumber: prev.mobileNumber
            }
            else if (name == 'email') return {
                candidateId: prev.candidateId,
                partyName: prev.partyName,
                name: prev.name,
                dob: prev.dob,
                image: prev.image,
                gender: prev.gender,
                email: value,
                mobileNumber: prev.mobileNumber
            }
            else if (name == 'mobileNumber') return {
                candidateId: prev.candidateId,
                partyName: prev.partyName,
                name: prev.name,
                dob: prev.dob,
                image: prev.image,
                gender: prev.gender,
                email: prev.email,
                mobileNumber: value
            }
        })
    }

        const submitCandidate = (err) => {
            err.preventDefault();
            axios
                .post("http://localhost:8080/api/candidate/register", {
                    candidateId: candidate.candidateId,
                    partyName: candidate.partyName,
                    name: candidate.name,
                    dob: candidate.dob,
                    image: candidate.image,
                    gender: candidate.gender,
                    email: candidate.email,
                    mobileNumber: candidate.mobileNumber
                })
                .then((res) => {
                    console.log(res)
                    toast.success("added successfully", {
                        position: 'top-left'
                    })
                })
                .catch(err => console.log("candidate" + err))

        }
        return (
        <form onSubmit={submitCandidate}
            className=" 
                    flex flex-col 
                    p-[8rem] h-screen 
                    w-screen border-2 
                    border-red-400 
                    pt-20
                
                     gap-4"
        >
            <b
                className="flex justify-center items-2xl"
            >Candidate details
            </b>
            <div
                className="grid grid-cols-2 gap-12 p-4">
                <label
                    htmlFor=""
                    className="flex flex-col"
                >
                    Candidate_Id
                    <input
                        type="text"
                        name="candidateId"
                        onChange={inputEvent}
                        value={candidate.candidateId}
                        id=""
                        className="border-2 outline-none
             border-green-500 pl-2 "
                    />
                </label>
                <label
                    htmlFor=""
                    className="flex flex-col"
                > Party Name
                    <input
                        type="text"
                        name="partyName"
                        onChange={inputEvent}
                        value={candidate.partyName}
                        id=""
                        className="border-2 outline-none
            border-green-500 pl-2 " />
                </label>
                <label
                    htmlFor=""
                    className="flex flex-col"
                >Name
                    <input
                        type="text"
                        name="name"
                        onChange={inputEvent}
                        value={candidate.name}
                        id=""
                        className="border-2 outline-none 
                border-green-500 pl-2 " />
                </label>
                <label htmlFor="" className="flex flex-col">
                    DOB
                    <input type="date"
                        name="dob" id=""
                        onChange={inputEvent}
                        value={candidate.dob}
                        className="border-2 outline-none
                 border-green-500 pl-2 " />
                </label>

                <label htmlFor="" className="flex flex-col">
                    Image
                    <input type='file'
                        name="image" id=""
                        onChange={inputEvent}
                        value={candidate.image}
                        className="border-2 outline-none
                  border-green-500 pl-2 rounded bg-slate-500" />
                </label>
                <span htmlFor="" className="flex flex-col">
                    Gender
                    <label htmlFor="">
                        <input type="radio" name="gender"
                            onChange={inputEvent}
                            value={candidate.gender}
                            id="" />
                        Male
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="gender"
                            onChange={inputEvent}
                            value={candidate.gender}
                            id="" />
                        Female
                    </label>
                </span>

                <label htmlFor="" className="flex flex-col">
                    Email
                    <input
                        type="email"
                        name="email"
                        onChange={inputEvent}
                        value={candidate.email}
                        id=""
                        className="border-2 outline-none border-green-500 pl-2 h-6" />
                </label>

                <label htmlFor="" className="flex flex-col">
                    Phone Number
                    <input type="number"
                        name="mobileNumber"
                        onChange={inputEvent}
                        value={candidate.mobileNumber}
                        id="" className="border-2 outline-none border-green-500 pl-2 " />
                </label>
            </div>
            <div
                className="flex justify-around"
            >
                <button type="submit"
                    className="border-2
              bg-blue-200
               rounded-xl p-2
                pl-4 pr-4"
                >Submit
                </button>
                <NavLink to="/adminLogin" className="border-2 bg-blue-200 rounded-xl p-2 pl-4 pr-4">Back</NavLink>
            </div>

        </form>)
    }

export default CandidatesForm;


