import React from 'react';
import Sidebar from '../../component/Sidebar';
import Navbar from '../../component/Navbar';
import { NavLink } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import { useGlobalContext } from '../../Context';

function User() {
  const {user,handelDelete,showDetails}= useGlobalContext();
  return (
    <div className='flex w-[100%] h-[100%]'>
      <div  id='sidebar' className='w-[250px] bg-gray-100 border'>
        <Sidebar/>
      </div>
      <div className='basis w-full px-[20px]'>
        <Navbar className='border'/>
        <table className='w-full' border='1'>
         <thead>
           <tr className='border divide-x '>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Status</th>
              <th>Transaction</th>
              <th>Action</th>
            </tr>
         </thead>
         <tbody className=''>
            {
              user.map((user,key) => {
                const {id,username,img,email,status,transaction} = user;
                return (
                  <tr key={id} className='border odd:bg-gray-100'>
                    <td className='font-bold'>{key+1}</td>
                    <td className='flex items-center mt-[13px] gap-[5px]'>
                      <img src={img} className='w-[20px] h-[20px] rounded-[50%]' alt="avatar" />
                      <p className='text-[15px] font-[400]'>{username}</p>
                    </td>
                    <td className='text-[15px]'>{email}</td>
                    <td className='flex items-center mt-[1px]  gap-[5px]'>
                      <span className={`w-[10px] h-[10px] rounded-[50%] ${status}`} ></span>
                      <p className='text-[15px]'>{status}</p>
                    </td>
                    <td>{transaction}</td>
                    <td className='flex items-center justify-evenly'>
                      <NavLink to='/user/edite'>
                        <button onClick={()=> showDetails(user) } className='w-[fill-centent] bg-green-500 hover:bg-green-300 text-white text-[13px] rounded-lg p-[5px]'>Edite</button>
                      </NavLink>
                      <MdDeleteOutline onClick={()=> handelDelete(id)} size={20} className='text-red-500 hover:text-red-300'/>
                    </td>
                  </tr>
                )
              })

            }
          </tbody>
        </table>
      </div>
          
      
    </div>
  )
}

export default User;