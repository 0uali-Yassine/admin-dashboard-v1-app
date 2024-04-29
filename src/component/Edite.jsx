import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { FaUser } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoMdCloudUpload } from "react-icons/io";
import { useGlobalContext } from '../Context';
import { NavLink } from 'react-router-dom';

function Edite() {
    const {showDtails} = useGlobalContext();
    const {img,username,email,phone,country} = showDtails;
    const [file,setFile] = useState('');
    console.log();
  return (
    <div id='editeUse' className='flex justify-between w-[100%] h-[100%]'>
      <div  id='sidebar' className='w-[250px] bg-gray-100 border '>
        <Sidebar/>
      </div>
      <div className='basis w-full px-[20px]'>
        <Navbar className='border'/>
        <div className='flex justify-between px-[20px]'>
          <h1 className='font-bold text-[20px] '>Edite User</h1>
          <NavLink to='/user/create'>
            <button className='w-[fit-content] px-[20px] rounded-md font-bold text-white bg-green-500 hover:bg-green-400'>Create</button>
          </NavLink>
        </div>
        <div id='sectionEditeUser' className='w-full p-[20px] flex justify-between'>
          <section className='flex justify-between flex-col w-[300px]  p-[20px] shadow-sm'>
            <div className='flex gap-[10px]'>
              <img src={img} alt="avatar"className='w-[40px] h-[40px] rounded-[50%]' />
              <div className='flex flex-col'>
                <h1 className='text-[15px] font-bold'>{username}</h1>
                <p className='text-[15px] text-gray-400'>Software Engineer</p>
              </div>
            </div>
                
            <h1 className='text-gray-400 text-[15px] font-bold'>Account Details</h1>
                
            <div className='flex gap-[10px] text-gray-500'>
              <FaUser size={17} className='text-gray-600'/>
              <p className='text-[14px] font-bold text-gray-600'>{username}</p>
            </div>
            <div className='flex gap-[10px] text-gray-500'>
              <FaRegCalendarAlt size={17} className='text-gray-600'/>
              <p className='text-[14px] font-bold text-gray-600'>10.12.2024</p>
            </div>

            <h1 className='text-gray-400 text-[15px]  font-bold'>Contact</h1>
            <div className='flex gap-[10px] text-gray-500'>
              <IoIosPhonePortrait size={17} className='text-gray-600'/>
              <p className='text-[14px] font-bold text-gray-600'>{phone}</p>
            </div>
            <div className='flex gap-[10px] text-gray-500'>
              <AiOutlineMail size={17} className='text-gray-600'/>
              <p className='text-[14px] font-bold text-gray-600'>{email}</p>
            </div>
            <div className='flex gap-[10px] text-gray-500'>
              <FaLocationCrosshairs size={17} className='text-gray-600'/>
              <p className='text-[14px] font-bold text-gray-600'>{country}</p>
            </div>
          </section>

          <section id='sectionTwoEditeUser' className='flex flex-col justify-between w-[60%] p-[20px] shadow-lg'>
            <h1 className='text-[17px] mb-[8px] font-bold'>Edite</h1>
            <form className='flex justify-between' onSubmit={(e)=> e.preventDefault()}>
              <div className='flex flex-col gap-[10px] w-[230px]'>
                <div className='flex flex-col'>
                  <label htmlFor="username" className='font-[400] text-[15px]'>Username</label>
                  <input id='username' type="text" placeholder={username} className='border-b-[1px] text-[13px] py-[5px] outline-none'/>
                </div>
                 
                <div className='flex flex-col'>
                  <label htmlFor="Full name" className='font-[400] text-[15px]'>Full name</label>
                  <input id='Full name' type="text" placeholder={username} className='border-b-[1px] text-[13px] py-[5px] outline-none'/>
                </div>
                  
                  
                  
                <div className='flex flex-col'>
                  <label htmlFor="email" className='font-[400] text-[15px]'>Email</label>
                  <input id='email' type="email" placeholder={email} className='border-b-[1px] text-[13px] py-[5px] outline-none'/>
                </div>
                 
                <div  className='flex flex-col'>
                  <label htmlFor="phone" className='font-[400] text-[15px]'>Phone</label>
                  <input id='phone' type="number" placeholder={phone} className='border-b-[1px] text-[13px] py-[5px] outline-none'/>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="address" className='font-[400] text-[15px]'>Address</label>
                  <input id='address' type="text" placeholder={country} className='border-b-[1px] text-[13px] py-[5px] outline-none'/>
                </div>
                 
              </div>
              <div className='flex flex-col justify-between'>
                <div className='flex items-center gap-[10px]'>
                  <img src={file ? URL.createObjectURL(file) : img} alt="" className='w-[100px] h-[100px] border rounded-md'/>
                  <label htmlFor="file">
                      <IoMdCloudUpload size={30}/>
                  </label>
                  <input id='file' type="file"  onChange={ e => setFile(e.target.files[0])} className='hidden'/>
                </div>
                <button className='text-white text-[15px] font-bold rounded-md bg-violet-600 hover:bg-violet-400 w-[fit-content] px-[20px] py-[2px]'>Update</button>
              </div>

            </form>
          </section>
        </div>
      </div>
      
    </div>
  )
}

export default Edite;