import React from 'react';
import { FaHome } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { GoReport } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { VscFeedback } from "react-icons/vsc";
import { TiMessages } from "react-icons/ti";
import { MdReport } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='p-[15px] min-h-[100vh]'>
      <h1 className='text-center text-[20px] mb-[20px] text-violet-600 font-bold'>Dashboard</h1>
      <div className='mb-[15px]'>
        <h1 className='text-gray-400 font-bold'>Dashboard</h1>
        <ul className='pl-[10px]'>
          <NavLink to='/'>
            <li><FaHome size={16} className='mr-[5px]'/> Home</li>
          </NavLink>
          <li><IoAnalyticsSharp  size={16} className='mr-[5px]'/>Analytics</li>
          <li><IoAnalyticsSharp  size={16} className='mr-[5px]'/>Sales</li>
        </ul>
      </div>
      <div className='mb-[15px]'>
        <h1 className='text-gray-400 font-bold'>Quick Menu</h1>
        <ul className='pl-[10px]'>
          <NavLink to='/user'>
            <li><FaUser size={16} className='mr-[5px]'/>Users</li>
          </NavLink>
          <NavLink to='/product'>
            <li><MdProductionQuantityLimits size={16} className='mr-[5px]'/>Products</li>
          </NavLink>
          <li><AiOutlineTransaction size={16} className='mr-[5px]'/>Transactions</li>
          <li><GoReport size={16} className='mr-[5px]'/>Reports</li>
        </ul>
      </div>
      <div className='mb-[15px]'>
        <h1 className='text-gray-400 font-bold'>Notifications</h1>
        <ul className='pl-[10px]'>
          <li><CiMail size={16} className='mr-[5px]'/>Mail</li>
          <li><VscFeedback size={16} className='mr-[5px]'/>Feedback</li>
          <li><TiMessages size={16} className='mr-[5px]'/>Messages</li>
        </ul>
      </div>
      <div className='mb-[15px]'>
        <h1 className='text-gray-400 font-bold'>Staff</h1>
        <ul className='pl-[10px]'>
          <li><TiMessages size={16} className='mr-[5px]'/>Manage</li>
          <li><IoAnalyticsSharp  size={16} className='mr-[5px]'/>Analytics</li>
          <li><MdReport size={16} className='mr-[5px]'/>Reports</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;