import React, { useState } from "react";

export default function VotingPannel() {
  const [radioBox, setRadioBox] = useState({
    box: "",
  });
  const info = [
    {
      name: "ali",
      partyName: "congress",
      r: false,
      img: "congressFlag",
      age: "21",
      education: "btech",
      id: 1,
    },
    {
      name: "tom",
      partyName: "aap",
      r: false,
      img: "appFlag",
      age: "21",
      education: "btech",
      id: 2,
    },
    {
      name: "tom",
      partyName: "aap",
      r: false,
      img: "appFlag",
      age: "21",
      education: "btech",
      id: 3,
    },
    {
      name: "tom",
      partyName: "aap",
      r: false,
      img: "appFlag",
      age: "21",
      education: "btech",
      id: 4,
    },
  ];

  const inputEvent = (e) => {
    setRadioBox({
      ...radioBox,
      [e.target.name]: e.target.id,
    });
  };
  console.log(radioBox);
  return (
    <form
      className={`
    h-screen
    ml-20
    w-screen
    pt-36
    flex
    justify-center
    flex-col
    items-center
    gap-4
    bg-slate-900
    
     `}
    >
      <h2 className="text-white font-bold text-2xl mr-[26rem]">Voting Pannel</h2>
      {info.map((v) => {
        return (
          <>
            <div
              className="
       flex justify-evenly
       items-center
       w-auto
       text-xl
      flex-col
       "
            >
              <div
                className="
                grid justify-items-stretch
                grid-cols-5 pl-8 items-center 
                w-[36rem]
              bg-white
              p-2
              border-blue-700
              border-2"
              
              >
                <input
                  type="radio"
                  name="box"
                  onClick={inputEvent}
                  id={v.id}
                  className="h-10 w-10"
                />
                <span>{v.name}</span>
                <span>{v.partyName}</span>
                <span>image...</span>
                <span className="flex justify-center items-center">icon</span>
              </div>
              <div>
                {radioBox.box == v.id || radioBox.box == v.id ? (
                  <div
                    className="
        flex flex-col
       h-auto w-[30rem] 
       bg-white
       pl-8 p-2 border-t-0"
                  >
                    <div className="flex gap-4">
                      <label className="font-bold"> Name :</label>
                      <span>{v.name}</span>
                    </div>
                    <div className="flex gap-4">
                      <label className="font-bold"> Age :</label>
                      <span>{v.age}</span>
                    </div>
                    <div className="flex gap-4">
                      <label className="font-bold"> Party :</label>
                      <span>{v.partyName}</span>
                    </div>
                    <div className="flex gap-4">
                      <label className="font-bold"> Education :</label>
                      <span>{v.education}</span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </>
        );
      })}
      <div className=" pl-8 p-2 gap-4 flex mr-32 items-center ">
      <input type="checkbox" name="" id=""  className="h-6 w-6"/>
      <span className="text-white">I have selected name from party as my candidate</span>
      </div>
      <button type="submit" className="bg-blue-800 text-stone-100 p-1 pl-8 pr-8">SUBMIT</button>
    </form>
  );
}
