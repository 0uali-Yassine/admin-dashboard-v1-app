import React from 'react';
import {userData} from '../data';
import {ResponsiveContainer,XAxis,LineChart,Legend,Line , CartesianGrid, Tooltip} from 'recharts';


function Chartuser() {
  return (
    <div className='w-full m-auto'>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={userData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Active User" stroke="rgb(124 58 237)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chartuser;