import React from 'react';
import { IoEye } from "react-icons/io5";

function Members() {
  return (
    <div className='w-[300px] p-[20px] shadow-lg'>
        <h1 className='text-[16px] font-bold mb-[10px]'>New Join Members</h1>
        <div className='flex justify-between gap-[5px] items-center mb-[10px]'>
            <img src="https://images.unsplash.com/photo-1567598317136-3cd762432241?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className='w-[35px] h-[35px] rounded-[50%]' alt="avatar" />
            <div className='flex flex-col w-[122px]'>
                <h1 className='text-[14px] font-bold'>Anna Keller</h1>
                <p className='text-[13px] text-gray-400'>Software Enginner</p>
            </div>
            <div className='flex justify-between items-center cursor-pointer w-[80px] rounded-lg p-[5px] bg-gray-200 text-gray-500 hover:text-gray-700'>
                <IoEye size={20}/>
                <p className='text-[14px]'>Display</p>
            </div>
        </div>
        <div className='flex justify-between gap-[5px] items-center mb-[10px]'>
            <img src="https://plus.unsplash.com/premium_photo-1681822874682-267b2de5dfb0?q=80&w=817&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className='w-[35px] h-[35px] rounded-[50%]' alt="avatar" />
            <div className='flex flex-col w-[122px]'>
                <h1 className='text-[14px] font-bold'>Brant Fabian</h1>
                <p className='text-[13px] text-gray-400'>Art Director</p>
            </div>
            <div className='flex justify-between items-center cursor-pointer w-[80px] rounded-lg p-[5px] bg-gray-200 text-gray-500 hover:text-gray-700'>
                <IoEye size={20}/>
                <p className='text-[14px]'>Display</p>
            </div>
        </div>
        <div className='flex justify-between gap-[5px] items-center mb-[10px]'>
            <img src="https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?q=80&w=751&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className='w-[35px] h-[35px] rounded-[50%]' alt="avatar" />
            <div className='flex flex-col w-[122px]'>
                <h1 className='text-[14px] font-bold'>Aryana Merill</h1>
                <p className='text-[13px] text-gray-400'>UI/UX Developer</p>
            </div>
            <div className='flex justify-between items-center cursor-pointer w-[80px] rounded-lg p-[5px] bg-gray-200 text-gray-500 hover:text-gray-700'>
                <IoEye size={20}/>
                <p className='text-[14px]'>Display</p>
            </div>
        </div>
        <div className='flex justify-between gap-[5px] items-center mb-[10px]'>
            <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className='w-[35px] h-[35px] rounded-[50%]' alt="avatar" />
            <div className='flex flex-col w-[122px]'>
                <h1 className='text-[14px] font-bold'>Russ Linville</h1>
                <p className='text-[13px] text-gray-400'>Manger</p>
            </div>
            <div className='flex justify-between items-center cursor-pointer w-[80px] rounded-lg p-[5px] bg-gray-200 text-gray-500 hover:text-gray-700'>
                <IoEye size={20}/>
                <p className='text-[14px]'>Display</p>
            </div>
        </div>
        <div className='flex justify-between gap-[5px] items-center mb-[10px]'>
            <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className='w-[35px] h-[35px] rounded-[50%]' alt="avatar" />
            <div className='flex flex-col w-[122px]'>
                <h1 className='text-[14px] font-bold'>Alisha Davidson</h1>
                <p className='text-[13px] text-gray-400'>Software Enginner</p>
            </div>
            <div className='flex justify-between items-center cursor-pointer w-[80px] rounded-lg p-[5px] bg-gray-200 text-gray-500 hover:text-gray-700'>
                <IoEye size={20}/>
                <p className='text-[14px]'>Display</p>
            </div>
        </div>
        
    </div>
  )
}

export default Members;