import React from 'react';
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import  Widget from '../../component/Widget'
import Chartuser from '../../charts/Chartuser';
import Members from '../../component/Members';
import Transactions from '../../component/Transactions';
function Home() {
  return (
    <div className='flex w-[100%] h-[100%]'>
      <div id='sidebar' className='w-[250px] bg-gray-100 border'>
        <Sidebar/>
      </div>
      <div className='basis w-full px-[20px]'>
        <Navbar className='border'/>
        <div className=' flex flex-wrap  justify-center gap-[20px] mb-[10px] w-[100%] h-auto'>
          <Widget name='Revenue' price={2.454} sp={-11.4}/>
          <Widget name='Sales' price={4.564} sp={-1.4}/>
          <Widget name='Cost' price={2.765} sp={+2.1}/>
        </div>
        <div className='w-full shadow-lg p-[10px] mb-[10px]'>
          <h1 className='font-bold p-[20px]'>Active User Details</h1>
          <Chartuser/>
        </div>
        <div id='member_transaction' className='w-full flex justify-between'>
          <Members/>
          <Transactions/>
        </div>
      </div>
      
    </div>
  )
}

export default Home;