import React from 'react'

function Transactions() {
  return (
    <div id='transaction' className='w-[70%] p-[20px] shadow-lg '>
        <h1 className='text-[16px] font-bold mb-[10px]'>Latest Tansaction</h1>
        <table className='w-full'>
            <thead >
                <tr className='pb-[10px]'>
                    <th>Custumer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className='flex td'>
                        <img src="https://images.unsplash.com/photo-1513673054901-2b5f51551112?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-[35px] h-[35px] rounded-[50%]' alt="avatar" />
                        <p className='text-[13px] font-bold'>Susan Carlson</p>
                    </td>
                    <td>
                        <p className='text-[13px] text-gray-400'>23 May 2024</p>
                    </td>
                    <td>
                        <p className='text-[13px] text-gray-400'>$122.00</p>
                    </td>
                    <td>
                        <p className='text-[13px] font-[400] p-[5px] w-[fit-content] rounded-lg text-green-400 bg-green-100'>Approved</p>
                    </td>
                </tr>

                <tr>
                    <td className='flex td'>
                        <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-[35px] h-[35px] rounded-[50%]' alt="avatar" />
                        <p className='text-[13px] font-bold'>Lindsay Wikie</p>
                    </td>
                    <td>
                        <p className='text-[13px] text-gray-400'>23 May 2024</p>
                    </td>
                    <td>
                        <p className='text-[13px] text-gray-400'>$82.00</p>
                    </td>
                    <td>
                        <p className='text-[13px] font-[400] p-[5px] w-[fit-content] rounded-lg text-violet-400 bg-violet-100'>Pending</p>
                    </td>
                </tr>

                <tr>
                    <td className='flex td'>
                        <img src="https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-[35px] h-[35px] rounded-[50%]' alt="avatar" />
                        <p className='text-[13px] font-bold'>Eric Balley</p>
                    </td>
                    <td>
                        <p className='text-[13px] text-gray-400'>23 May 2024</p>
                    </td>
                    <td>
                        <p className='text-[13px] text-gray-400'>$12.00</p>
                    </td>
                    <td>
                        <p className='text-[13px] font-[400] p-[5px] w-[fit-content] rounded-lg text-green-400 bg-green-100'>Approved</p>
                    </td>
                </tr>

                <tr>
                    <td className='flex td'>
                        <img src="https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-[35px] h-[35px] rounded-[50%]' alt="avatar" />
                        <p className='text-[13px] font-bold'>Olga Carry</p>
                    </td>
                    <td>
                        <p className='text-[13px] text-gray-400'>23 May 2024</p>
                    </td>
                    <td>
                        <p className='text-[13px] text-gray-400'>$90.00</p>
                    </td>
                    <td>
                        <p className='text-[13px] font-[400] p-[5px] w-[fit-content] rounded-lg text-red-400 bg-red-100'>Rejected</p>
                    </td>
                </tr>
                
                
            </tbody>
        </table>
    </div>
  )
}

export default Transactions;