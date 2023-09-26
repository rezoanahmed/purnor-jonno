import React from 'react';
import { useState } from 'react';
import { PieChart, Pie, Tooltip, Sector, Cell } from 'recharts';
const Stats = () => {
    const myData = JSON.parse(localStorage.getItem('donation'));
    
    // console.log(myData);
    
    myData.map(element=>console.log(element))


    const data = [
        { name: `${myData[0].title}`, value: 23 },
        { name: "b", value: 23 },
        { name: "c", value: 94 },
    ]
    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default Stats;