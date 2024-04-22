


const Admin=()=>{
    return(<div className="text-white  bg-cyan-800  w-screen h-screen ml-80">
            <h1 className="relative top-20 text-4xl text-center mr-96">Welcome Admin</h1>
        <div action="" className="grid grid-cols-2  justify-items-start p-20 relative top-20 gap-40 "> 
         
        <button type="button" className="bg-blue-800 rounded  p-2 pl-4 pr-4">Create Voter</button>
        <button type="button" className="bg-blue-800 rounded  p-2">Create Candidate</button>
        <button type="button" className="bg-blue-800 rounded  p-2">Edit Voters/view</button>
        <button type="button" className="bg-blue-800 rounded  p-2">Edit Canditate/view</button>

        </div>
        </div>
    )
}

export default Admin;