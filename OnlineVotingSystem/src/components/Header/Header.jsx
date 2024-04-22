import { NavLink } from "react-router-dom"
import AboutProject from "../../pages/AboutProject"
import { Step } from "../../pages/Step"
import Footer from "../Footer/Footer"
import NavBar from "../Nav/NavBar"





export default function Header() {
    return <div>
    <div className=" bg-slate-900 p-10  ml-80  h-screen flex items-center gap-10">
        

        <div className="grid grid-cols-2 gap-36 ">
        <div className="text-neutral-50 ">
            <img className="w-96 h-96 
             shadow-cyan-500/80 rounded shadow-xl"
              src="./business-women-with-computer-and-smartphone-for-vote-online-vector.jpg"
               alt="display soon..." />
        </div>

            <div className="  flex flex-col  gap-6  text-neutral-50 justify-center w-auto h-auto">
                <span className=" font-bold text-3xl">Be a part of decision</span>
                <span className="font-bold text-blue-700 text-6xl">Vote Today</span>
                {/* <div className="flex  w-80 justify-between p-4">
                    <NavLink 
                     to="/Registration"
                     className={'pl-6 pr-6 bg-blue-700 shadow-cyan-500/50  shadow-lg'}  
                  >REGISTER
                  </NavLink>
                    <NavLink 
                    to="/Readme"
                    className={' pl-6 pr-6 bg-blue-700 shadow-cyan-500/50 shadow-lg'}
                    >READ ME
                    </NavLink>                    
                </div> */}
            </div>
            

        </div>
      
      
    </div> 
    <AboutProject item="Featues" color="white" text="text-black" border="border-blue-700"/>   
    <AboutProject item="About" color="bg-slate-900" text="text-white"/> 
    <Step/>
    <Footer color="text-blue-600"/>
     </div>
   


}
