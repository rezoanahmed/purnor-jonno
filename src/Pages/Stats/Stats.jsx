import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PieChartComponent from './PieChartComponent';

const Stats = () => {
    const data=useLoaderData();
    // total donation
    let price = 0;
    data.map(element=>{
        price+=element.price;  
    })
    const totalDonation = price;
    // console.log(totalDonation);
    // local storage donation
    const storageData = JSON.parse(localStorage.getItem("donation"));
    let storagePrice = 0;
    storageData.map(element=>{
        storagePrice+=element.price;
    })
    let storageDonation = storagePrice;
    // console.log(storageDonation);
    const donations = [totalDonation, storageDonation];
    return (
        <div>
            <PieChartComponent parameter={donations}></PieChartComponent>
        </div>
    );
};

export default Stats;