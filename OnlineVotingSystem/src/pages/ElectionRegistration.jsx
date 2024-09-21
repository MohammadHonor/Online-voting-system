import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ElectionRegistration() {
  const navigate = useNavigate();
  const refer = useRef("");

  const [election, setElection] = useState({
    electionName: "",
    date: "",
    constituency: "",
  });
  const inputEvent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setElection((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/elections/register", {
        electionName: election.electionName,
        date: election.date,
        constituency: election.constituency,
      })
      .then((res, req) => {
        console.log(res);
        if (res.data == "true") {
          navigate("/adminPannel");
          toast.success("registration completed", {
            position: "top-center",
            onClose: "200",
          });
        }
        refer.current.data = "";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="flex flex-col
     h-screen 
     border-2 
     items-center justify-center bg-black"
    >
      <form
        action=""
        onSubmit={submitHandler}
        className="flex  flex-col rounded gap-8 justify-center items-center bg-sky-600 border-rounded  border-blue-900 h-[500px] w-[500px]"
      >
        <b className="text-3xl">Election Registration from</b>
        <select
          name="electionName"
          onChange={inputEvent}
          className="outline-none pl-2 border-blue-500 border w-96 h-8"
        >
            <option value="">Choose Election</option>
          <option value="State Election">State Election</option>
        </select>
        {/* <input
          type="text"
          name="electionName"
          id=""
          ref={refer}
          placeholder="Enter Election Name"
          onChange={inputEvent}
          className="outline-none pl-2 border-blue-500 border w-96 h-8"
        /> */}
        <input
          type="date"
          name="date"
          id=""
          ref={refer}
          onChange={inputEvent}
          className="outline-none pl-2 border-blue-500 border w-96 h-8"
        />
        {/* <input
          type="text"
          name="constituency"
          id=""
          onChange={inputEvent}
          ref={refer}
          placeholder="Enter Name of Constituency"
          className="outline-none pl-2 border-blue-500 border w-96 h-8 "
        /> */}
        <select
          id="country-state"
          name="constituency"
          onChange={inputEvent}
          className="outline-none pl-2 border-blue-500 border w-96 h-8"
        >
          <option value="">Select state</option>
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
        <button
          type="submit"
          className="border w-24 border-blue-700 bg-amber-800 rounded p-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
