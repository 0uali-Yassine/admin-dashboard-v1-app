import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Widget({name,price,sp}) {
  return (
    <div className='flex flex-col shadow-lg justify-evenly w-[300px] border h-[150px] p-[20px] rounded-lg'>
      <h1 className='text-bold text-[30px] font-bold'>{name}</h1>
      <div className='flex justify-between items-center w-[150px]'>
        <h1 className='font-bold text-[20px]'>${price}</h1>
        <h1 className=' font-bold text-[15px]'>{sp}</h1>
        {
          sp < 0 ? <IoIosArrowDown size={20} className='text-red-500'/> : <IoIosArrowUp size={20} className='text-green-500'/>
        }
      </div>
      <p className='text-[14px] text-gray-500'>Compared to last month</p>
    </div>
  )
}

export default Widget;