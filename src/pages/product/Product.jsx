import React from 'react';
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import { MdDeleteOutline } from 'react-icons/md';
import { useGlobalContext } from '../../Context';
import { NavLink } from 'react-router-dom';

function Product() {
  const {products,showProductDetails,handelProductDelete} = useGlobalContext();
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
            <th>Product</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
       </thead>
       <tbody className=''>
          {
            products.map((product,key) => {
              const {id,name,img,stock,status,price} = product;
              return (
                <tr key={id} className='border odd:bg-gray-100'>
                  <td className='font-bold'>{key+1}</td>
                  <td className='flex items-center mt-[13px] gap-[5px]'>
                    <img src={img} className='w-[20px] h-[20px] rounded-[50%]' alt="avatar" />
                    <p className='text-[15px] font-[400]'>{name}</p>
                  </td>
                  <td className='text-[15px]'>{stock}</td>
                  <td className='flex items-center mt-[1px]  gap-[5px]'>
                    <span className={`w-[10px] h-[10px] rounded-[50%] ${status}`} ></span>
                    <p className='text-[15px]'>{status}</p>
                  </td>
                  <td>{price}</td>
                  <td className='flex items-center justify-evenly'>
                    <NavLink to='/product/edite'>
                      <button onClick={()=> showProductDetails(product,id) } className='w-[fill-centent] bg-green-500 hover:bg-green-300 text-white text-[13px] rounded-lg p-[5px]'>Edite</button>
                    </NavLink>
                    <MdDeleteOutline onClick={()=> handelProductDelete(id)} size={20} className='text-red-500 hover:text-red-300'/>
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

export default Product;