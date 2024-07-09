import { NavLink } from "react-router-dom";
import axios from 'axios' ;


const Admin=()=>{
   
    const voters=()=>{
      axios('http://localhost:8080/api/voters_list').then((res)=>{

        console.log(res)
    })
}
    return(<div className="text-white bg-lime-800 w-screen h-screen p-10 pl-32">
            <h1 className="relative top-20 text-4xl text-center ">Welcome To Admin Pannel</h1>
        <div action="" className="flex flex-col gap-4 relative top-40 "> 
         <NavLink to="/voters/register" className="bg-blue-800 rounded  p-3 pl-4 ">Create Voters</NavLink>
         <NavLink to="/candidates" className="bg-blue-800 rounded  p-3 pl-4">Create Candidates</NavLink>
        <NavLink to="/VotersView" className="bg-blue-800 rounded  p-3" onClick={voters}>Edit Voters/view</NavLink>
        <NavLink to="/candidatesView" className="bg-blue-800 rounded  p-3  pl-4">Edit Canditate/view</NavLink>
        <NavLink to="/election_result" className="bg-blue-800 rounded  p-3 pl-4">Election Result</NavLink>
        </div>
        </div>
    )
}

export default Admin;