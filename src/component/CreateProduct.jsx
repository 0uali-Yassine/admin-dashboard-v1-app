import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { IoMdCloudUpload } from 'react-icons/io';


function CreateProduct() {
  return (
    <div className='flex w-[100%] h-[100%]'>
        <div  id='sidebar' className='w-[250px] bg-gray-100 border'>
            <Sidebar/>
        </div>
        <div className='basis w-full px-[20px]'>
            <Navbar className='border'/>
            <h1 className='text-[20px] font-bold p-[20px]'>Product</h1>
            <form className='flex flex-col justify-between gap-[15px]'>
                <p>Image</p>
                <div className='flex items-center gap-[10px]'>
                    <img src="" alt="product" className='w-[100px] h-[100px] border' />
                    <input id='file' type="file" className='hidden'/>
                    <label htmlFor="file"><IoMdCloudUpload size={30}/></label>
                </div>

                <div className='flex flex-col gap-[5px] w-[250px]'>
                    <label htmlFor="name">Name</label>
                    <input id='name' type="text" className='border border-gray-400 text-[14px] p-[5px] outline-none' placeholder='Apple Airpods' />
                </div>
                <div className='flex flex-col gap-[5px] w-[250px]'>
                    <label htmlFor="stock">Stock</label>
                    <input id='stock' type="number" className='border border-gray-400 text-[14px] p-[5px] outline-none' placeholder='123' />
                </div>
                
                <div className='flex flex-col gap-[5px] w-[250px]'>
                    <label htmlFor="active">Active</label>
                    <select name="Active" id="active" className='border border-gray-400 outline-none text-[14px] p-[5px]'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className='w-[fit-content] border px-[16px] font-bold text-white bg-violet-500 hover:bg-violet-400 rounded-lg p-[3px]'>Create</button>
            </form>
            
        </div>
  </div>
  )
}

export default CreateProduct;