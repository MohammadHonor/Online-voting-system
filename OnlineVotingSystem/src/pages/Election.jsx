import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Login } from './Login';

const Election = () => {
  const location = useLocation();
  var initial_data =location.state.data
  let sorted_data=initial_data.sort((a, b) => new Date(a.date) - new Date(b.date))
 const [data,setData] = useState(sorted_data);
 
  return (
    <div className=' bg-black flex flex-col w-auto h-screen justify-center items-center '>
        <div className=' flex flex-col w-[60rem] p-10 gap-[2rem]  '>
        <p className='text-white font-bold '>Upcomming Elections :</p>
        <div className='flex  items-center
         bg-slate-300 p-[.5rem] justify-between
         rounded
         '>
            <p>{`${data[0].constituency} ${data[0].electionName}`}</p>
           <p >{data[0].date.substring(0,10)}</p>
        </div>
        <p className='text-white font-bold'>Other Elections :</p>
        <div className='flex justify-between items-center
         bg-slate-300 p-[.5rem] w-auto
         rounded
         '>
           <p>{`${data[1].constituency} ${data[1].electionName}`}</p>
           <p >{data[1].date.substring(0,10)}</p>
        </div>
        <div className='flex justify-between items-center
         bg-slate-300 p-[.5rem] w-auto
         rounded
         '>
         <p>{`${data[2].constituency} ${data[2].electionName}`}</p>
         <p >{data[2].date.substring(0,10)}</p>
        </div>
        <div className='flex justify-between items-center
         bg-slate-300 p-[.5rem] w-auto
         rounded
         '>
        <p>{`${data[3].constituency} ${data[3].electionName}`}</p>
        <p >{data[3].date.substring(0,10)}</p>
        </div>

        </div>
    </div>
  )
}

export default Election