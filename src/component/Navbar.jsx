import React from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { useGlobalContext } from '../Context';



function Navbar() {
  return (
    <nav className='flex justify-between items-center'>
      <CiMenuFries size={30} id='iconMenu' className='cursor-pointer hidden'/>
      <div className='w-full p-[20px] flex justify-end items-center'>
        <div className='relative mx-[5px]'>
          <IoMdNotificationsOutline size={20}/>
          <div className='absolute top-0 right-0 w-[10px] h-[10px] bg-red-500 rounded-[50%]'></div>
        </div>
        <div className='relative mx-[5px]'>
          <MdLanguage size={20}/>
          <div className='absolute top-0 right-0 w-[10px] h-[10px] bg-red-500 rounded-[50%]'></div>
        </div>
        <IoMdSettings size={20} className=' mx-[5px]'/>
        <div className='bg-[url("https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-no-repeat bg-cover w-[30px] h-[30px] rounded-[50%]'></div>
      </div>
      
    </nav>
  )
}

export default Navbar;