import React from 'react';
import {ResponsiveContainer,XAxis,LineChart,Legend,Line , CartesianGrid, Tooltip} from 'recharts';

function Chartproduct({showChartProduct}) {
  
  return (
    <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={showChartProduct[0].data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Sales" stroke="rgb(124 58 237)" />
        </LineChart>
      </ResponsiveContainer>
  )
}

export default Chartproduct;