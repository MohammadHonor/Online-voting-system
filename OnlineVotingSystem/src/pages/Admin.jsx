import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Admin = () => {
  const navigate = useNavigate();
  const voters = () => {
    axios(`${import.meta.env.VITE_URL}/api/voters_list`).then((res) => {
      console.log(res);
      const voter_list = res.data;
      navigate("/VotersView", {
        state: { list: voter_list },
      });
    });
  };
  const candidates=()=>{
    axios(`${import.meta.env.VITE_URL}/api/candidate_list`).then((res)=>{

      console.log(res)
      const candidate_list =res.data;
      navigate("/candidatesView" ,{
          state:{list:candidate_list}
      })
      
  })
}
  return (
    <div className="text-white bg-lime-800 w-screen h-screen p-10 pl-32">
      <h1 className="relative top-20 text-4xl text-center ">
        Welcome To Admin Pannel
      </h1>
      <div action="" className="flex flex-col gap-4 relative top-40 ">
        <NavLink
          to="/voters/register"
          className="bg-blue-800 rounded  p-3 pl-4 "
        >
          Create Voters
        </NavLink>
        <NavLink to="/candidates" className="bg-blue-800 rounded  p-3 pl-4">
          Create Candidates
        </NavLink>
        <button
          className="bg-blue-800 rounded flex justify-start items-center  p-3"
          onClick={voters}
        >
          Edit Voters/view
        </button>
        <button
       //   to="/candidatesView"
          className="bg-blue-800 rounded flex justify-start items-center  p-3"
          onClick={candidates}
        >
          Edit Candidates/view
        </button>
        <NavLink
          to="/election_result"
          className="bg-blue-800 rounded  p-3 pl-4"
        >
          Election Result
        </NavLink>
        <NavLink
          to="/Election_register"
          className="bg-blue-800 rounded  p-3 pl-4"
        >
          Election Registration{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Admin;
