import React from 'react'
import { CgNotes } from "react-icons/cg";
import { LiaSignInAltSolid } from "react-icons/lia";
import { RiDashboardFill } from "react-icons/ri";
import { MdVpnKey } from "react-icons/md";
import { SiLinuxcontainers } from "react-icons/si";


export const Step = () => {
    return (
        <div className='ml-80 bg-white w-screen h-screen font-bold flex flex-col gap-8 p-40'>

            <div className=' w-200 text-6xl border-b-4 border-blue-500 pb-4'>Follow these easy steps</div>
            <div className='flex gap-8 items-center'>
                <CgNotes className='text-4xl' />
                <span>Register yourself by filling the required informations</span>

            </div>
            <div className='flex gap-8 items-center'>
            <LiaSignInAltSolid className='text-4xl' />
                <span>SighIn as user</span>
            </div>
            <div className='flex gap-8 items-center'>
                <RiDashboardFill className='text-4xl' />
                <span>Go to vote option on dashboard</span>
            </div>
            <div className='flex gap-8 items-center'>
                <MdVpnKey className='text-4xl' />
                <span>Give security key</span>
            </div>
            <div className='flex gap-8 items-center'>
                <SiLinuxcontainers className='text-4xl' />
                <span>Vote your candidate and submit</span>
            </div>
        </div>
    )
}
