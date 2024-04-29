import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Createuser() {
  return (
    <div className='flex  w-[100%] h-[100%]'>
      <div  id='sidebar' className='w-[250px] bg-gray-100 border'>
        <Sidebar/>
      </div>
      <div className='basis w-full px-[20px]'>
        <Navbar />
        <h1 className='text-[20px] font-bold'>New User</h1>
        <section className='p-[20px]'>
            <form id='formCreateUser'  className='flex flex-col justify-between  w-[500px] '>
                <div id='sectionCreateUser' className='flex justify-between h-[300px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex flex-col'>
                            <label htmlFor="username" className='text-[15px] '>username</label>
                            <input id='username' type="text" className='border rounded-sm text-[13px] p-[5px] w-[230px] outline-none' placeholder='yassine' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="Email" className='text-[15px] '>Email</label>
                            <input id='email' type="email" className='border rounded-sm text-[13px] p-[5px] w-[230px] outline-none' placeholder='yassinezerouali@gmail.com' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="phone" className='text-[15px] '>Phone</label>
                            <input id='phone' type="number" className='border rounded-sm text-[13px] p-[5px] w-[230px] outline-none' placeholder='+1 34545 45' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-[15px]'>Gender</h1>
                            <div className='flex gap-[5px]'>
                                <input id='male' type="radio" name='Gender' />
                                <label htmlFor="male">Male</label>
                                <input id='female' type="radio" name='Gender'/>
                                <label htmlFor="female">Female</label>
                                <input id='other' type="radio" name='Gender'/>
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[10px] '>
                            <div className='flex flex-col'>
                                <label htmlFor="Fullname" className='text-[15px] '>Full Name</label>
                                <input id='Fullname' type="text" className='border rounded-sm text-[13px] p-[5px] w-[230px] outline-none' placeholder='yassine zerouali' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="Password" className='text-[15px] '>Password</label>
                                <input id='Password' type="password" className='border rounded-sm text-[13px] p-[5px] w-[230px] outline-none' placeholder='password' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="Address" className='text-[15px] '>Address</label>
                                <input id='Address' type="number" className='border rounded-sm text-[13px] p-[5px] w-[230px] outline-none' placeholder='New York | USA' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-[15px]'>Active</h1>
                                <select name="active" id="active" className='border text-[13px] p-[5px] outline-none'>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                    </div>
                </div>
                <button id='btn_createUser' className='w-[150px] px-[20px] py-[5px] rounded-md font-bold text-white bg-green-500 hover:bg-green-400'>Create</button>
            </form>
        </section>
      </div>
      
    </div>
  )
}

export default Createuser;