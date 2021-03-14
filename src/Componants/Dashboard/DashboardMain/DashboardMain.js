import React, { useEffect, useState } from 'react';
import DashboardMainCard from '../DashboardMainCard/DashboardMainCard';
import RecentAppointment from '../RecentAppointment/RecentAppointment';

const DashboardMain = () => {
    const [loadData,setLoadData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allpatients')
        .then(res=>res.json())
        .then(result=>{
            setLoadData(result)
        })

    },[])
    return (
        <div>
            <h1>Dash Main</h1>
            <DashboardMainCard loadData={loadData}></DashboardMainCard>
            <RecentAppointment></RecentAppointment>
        </div>
    );
};

export default DashboardMain;