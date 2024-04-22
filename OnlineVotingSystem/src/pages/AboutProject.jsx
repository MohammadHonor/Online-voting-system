//import { useState } from "react";
import { BsShieldLockFill } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaHandPointer } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RxLapTimer } from "react-icons/rx";


export default function AboutProject({item,color,text,border}){
    
   const des=()=>{
   {  if(item=="About"){
    return<><div >
An online voting system that will replace the<br/>
old ballot system or paper system .Over the time<br/>
we have utilized the required technology in every<br/>  
sector to improve efficiency and save the extra<br/> 
resources.But the voting system is still very<br/> 
expensive and requires a bigger workforce;<br/>
The system is slower and still not completely <br/>
tamper proof.We bring the system the is safe,<br/>
reliable and solve the modern issues like higher <br/>
reachability of the booth, crowd free voting,<br/>
inexpensive,faster results and others.<br/>
      </div></>
  }
  else if(item=="Featues"){
    return<>
      
        <div className="flex  items-center gap-8">
        <BsShieldLockFill  className="text-4xl"/>
        <span>
        Secured By 256 bit Encryption 
        </span>
        </div>

        <div className="flex  items-center gap-8">
        <SiEthereum  className="text-4xl"/>
        <span>
        Packed by ethereum based technology 
        </span>
        </div>

        <div className="flex  items-center gap-8">
        <IoShieldCheckmarkSharp  className="text-4xl"/>
        <span>
        Verifiable transections
        </span>
        </div>

        <div className="flex  items-center gap-8">
        <FaHandPointer  className="text-4xl"/>
        <span>
        Easy to use
        </span>
        </div>

        <div className="flex  items-center gap-8">
        <FaIndianRupeeSign  className="text-4xl"/>
        <span>
        Cheaper than ballot voting system
        </span>
        </div>

        <div className="flex  items-center gap-8">
        <RxLapTimer  className="text-4xl"/>
        <span>
      Faster voting process
        </span>
        </div>
      </>

  }
      }
    }
     
    return<div className={`${color}  relative flex h-screen w-screen justify-center items-center`}>
      <div className={`flex justify-center  relative  pt-4 ${border} border-t-4 relative w-96 rotate-90`}>
        <span className={`${text} text-6xl font-bold absolute rotate-180 `}>{item}</span>
        </div>

        
      <div className={`
      flex  
      flex-col
      gap-8
      font-bold
       relative
       right-20
       ${text}
       
       `}>
    {des()}
       </div>
    </div>
}