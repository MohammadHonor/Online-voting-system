import { Route, Routes } from "react-router-dom"
import Header from "../components/Header/Header"
import AboutProject from "../pages/AboutProject"
import Admin from "../pages/Admin"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Registration from "../pages/Registration"
const Routers = () => {
    return (< Routes>
        <Route path='/' element={<Header />} />
        <Route path='/About' element={<AboutProject item="About" color="bg-slate-900" text="text-white" />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/userLogin' element={<Login props="User" />} />
        <Route path="/adminPannel" element={<Admin/>}/>
        <Route path='/adminLogin' element={<Login props="Admin" />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/Features' element={< AboutProject item="Featues" color="white" text="text-black" border="border-blue-700" />} />
    </Routes>

    )
}

export default Routers