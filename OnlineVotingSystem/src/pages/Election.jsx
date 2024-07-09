import React from 'react'

const Election = () => {
  return (
    <div className=' bg-black flex flex-col w-screen h-screen justify-center items-center '>

        <div className=' flex flex-col w-[60rem] p-10 gap-[2rem]'>
        <p className='text-white font-bold '>Upcomming Elections :</p>
        <div className='flex justify-between items-center
         bg-slate-300 p-[.5rem]
         rounded
         '>
            <p >Lock Sabha</p>
            <p>Data</p>
        </div>
        <p className='text-white font-bold'>Other Elections :</p>
        <div className='flex justify-between items-center
         bg-slate-300 p-[.5rem]
         rounded
         '>
            <p>Lock Sabha</p>
            <p>Data</p>
        </div>
        <div className='flex justify-between items-center
         bg-slate-300 p-[.5rem]
         rounded
         '>
              <p>Lock Sabha</p>
              <p>Data</p>
        </div>
        <div className='flex justify-between items-center
         bg-slate-300 p-[.5rem]
         rounded
         '>
            <p>Lock Sabha</p>
            <p>Data</p>
        </div>

        </div>
    </div>
  )
}

export default Election