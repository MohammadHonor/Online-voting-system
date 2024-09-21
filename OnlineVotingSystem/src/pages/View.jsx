import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";

export default function View({ props }) {
  console.log(props);
  const loc = useLocation();
  const list = {list:loc.state.list};
  console.log(list)
  return (
    <div
      className=" 
    flex flex-col
    gap-2 
    pt-20 
    pl-20
    h-screen
    w-full  
    border-2 
  
    border-red-400 
    overflow-x-hidden
     "
    >
      <ul
        className="
        grid
        grid-cols-6
        w-screen
        pl-4
        p-2
        bg-green-900
        border-rounded
        text-white
        fixed
        justify-items-start
        place-items-center
        "
      >
        <li>Profile</li>
        <li>Name</li>
        <li>Age</li>
        <li>Gender</li>
        <li>Aadhar</li>
        <li>Delete</li>
      </ul>
      <div className="flex flex-col mt-12 gap-4 scroll-my-2">
        {
       list.list.map((data)=>{
          return (<ul
            className="
            grid
            grid-cols-6
            w-full
            pl-4
            p-2
            bg-stone-300
            justify-items-between
            items-center
            border-rounder
            
            ">
              <img className="h-16" src={`${data.image}`} alt="comming" />
              <li>{`${data.firstName} ${data.midName} ${data.lastName}`}</li>
              <li>{data.dob}</li>
              <li className="flex justify-center  relative right-12 ">Male</li>
              <li className="flex justify-center relative right-8 ">{data.aadharNumber}</li>
              <li
                className="flex justify-center  relative right-6 "
              >
                <RxCross2 className="text-2xl"/>
              </li>
            </ul>
          );
        
       })
        
        }
      </div>
    </div>
  );
}
