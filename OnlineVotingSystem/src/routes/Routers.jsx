import { Route, Routes } from "react-router-dom"
import Header from "../components/Header/Header"
import AboutProject from "../pages/AboutProject"
import Admin from "../pages/Admin"
import Contact from "../pages/Contact"
import {Login} from "../pages/Login"
import VotersForm from "../pages/VotersForm"
import CandidatesForm from "../pages/CandidatesForm"
import View from "../pages/View"
import VotingPannel from "../pages/VottingPannel"
import Result from "../pages/Result"
import AdminRegisteration from "../pages/AdminRegisteration"
import { ForgetPassword } from "../pages/ForgetPassword"
import ProfileInfo from "../pages/ProfileInfo"
import Election from "../pages/Election"



const Routers = () => {
    return (< Routes>
        <Route path='/' element={<Header />} />
        <Route path='/About' element={<AboutProject item="About" color="bg-slate-900" text="text-white" />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/userLogin' element={<Login props="User" />} />
        <Route path="/adminPannel" element={<Admin/>}/>
        <Route path='/adminLogin' element={<Login props="Admin" />} />
        <Route path='/Features' element={<AboutProject item="Featues" color="white" text="text-black" border="border-blue-700" />} />
        <Route path='/voters/register' element={<VotersForm/>}/>
        <Route path="/candidates" element={<CandidatesForm/>}/>
        <Route path="/votersView" element={<View props="Total Voters"/>}/>
        <Route path="/candidatesView" element={<View props="Total Candidates"/>}/>
        <Route path="/election_result" element={<Result/>}/>
        <Route path="/votingPannel" element={<VotingPannel/>}/>
        <Route path="/admin/register" element={<AdminRegisteration/>}/>
        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
        <Route path="/ProfileInfo" element={<ProfileInfo/>}/>
            
        <Route path="/Election"   element={<Election/>}/>
        
    </Routes>

    )
}

export default Routers