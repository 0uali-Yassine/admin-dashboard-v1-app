import React,{useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';
import Chartproduct from '../charts/Chartproduct';
import { IoMdCloudUpload } from 'react-icons/io';
import { useGlobalContext } from '../Context';

function Editeproduct() {
    const [file,setFile] = useState('');
    const {showProduct,showChartProduct} = useGlobalContext();
    const {id,name,img,stock,status} = showProduct;
    console.log(showChartProduct);
    console.log(showChartProduct[0]);
    console.log(showChartProduct[0].data);
  return (
    <div id='editeProduct' className='flex  w-[100%] h-[100%]'>
      <div  id='sidebar' className='w-[250px] bg-gray-100 border'>
        <Sidebar/>
      </div>
      <div className='basis w-full px-[20px]'>
            <Navbar className='border'/>
            <div className='flex justify-between px-[20px]'>
                <h1 className='text-[20px] font-bold'>Product</h1>
                <NavLink to='/product/create'>
                    <button className='w-[fit-content] px-[20px] rounded-md font-bold text-white bg-green-500 hover:bg-green-400'>Create</button>
                </NavLink>
            </div>
            <section id='sectionCreateProduct' className='flex justify-between mb-[20px]'>
                <div id='createProductChart' className='w-[400px] shadow-xl p-[10px]'>
                    <h1 className='font-bold text-[15px] m-[15px]'>Sales Performance</h1>
                    <Chartproduct showChartProduct={showChartProduct}/>
                </div>
                
                <div id='createProductDetails' className='flex flex-col gap-[20px] w-[500px] p-[20px] shadow-lg'>
                    <div className='flex items-center gap-[5px]'>
                        <img src={img} alt="product" className='w-[30px] h-[30px] rounded-[50%]'/>
                        <p className='text-[13px] font-bold'>{name}</p>
                    </div>
                    <div className='flex flex-col gap-[10px] w-[110px]'>
                        <div className='flex justify-between'>
                            <h1 className='text-[13px] font-bold'>id:</h1>
                            <p className='text-gray-400 text-[13px]'>{id}</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1 className='text-[13px] font-bold'>sales:</h1>
                            <p className='text-gray-400 text-[13px]'>2122</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1 className='text-[13px] font-bold'>active:</h1>
                            <p className={`${status === 'active'? 'text-green-500':'text-red-500'} text-[13px]`}>{status==='active' ? 'Yes':'No'}</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1 className='text-[13px] font-bold'>in stock:</h1>
                            <p className={`${stock > 0? 'text-green-500':'text-red-500'} text-[13px]`}>{stock > 0 ? 'Yes':'No'}</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='border shadow-lg p-[20px]'>
                <form className='flex justify-evenly'>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex flex-col'>
                            <label htmlFor='priductname' className='text-gray-400 text-[15px]'>Product Name</label>
                            <input id='priductname' type="text" className='text-[13px] w-[150px] outline-none p-[5px] border-b-[1px]'  placeholder='nameof'/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='stock' className='text-gray-400 text-[15px]'>In Stock</label>
                            <select name="inStock" id="istock" className='w-[150px] text-gray-500 text-[13px] p-[5px] border outline-none'>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='active' className='text-gray-400 text-[15px]'>Active</label>
                            <select name="active" id="active" className='w-[150px] text-gray-500 text-[13px] p-[5px] border outline-none'>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
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
                        <button className='text-white text-[15px] font-bold rounded-md bg-violet-600 hover:bg-violet-400  px-[20px] py-[2px]'>Update</button>
                    </div>
                </form>
            </section>
      </div>
          
      
    </div>
  )
}

export default Editeproduct;