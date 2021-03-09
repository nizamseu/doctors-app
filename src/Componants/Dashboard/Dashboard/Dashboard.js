import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
    const [selectedDate,setSelectedDate]=useState(new Date().toLocaleDateString())
    const [loadData,setLoadData]=useState([])
    
    const handleDate = date=>{
        setSelectedDate(date.toLocaleDateString())
    }


    useEffect(()=>{
        fetch('http://localhost:5000/loadappointments',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({selectedDate})
        })
        .then(res=>res.json())
        .then(result=>{
            setLoadData(result)
        })

    },[selectedDate])

    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                        <Sidebar></Sidebar>
                </div>

                <div className="col-md-5">
                <Calendar
                  
                onChange={handleDate}
                value={new Date()}
                    />
                </div>

                <div className="col-md-5">
                        <AppointmentsByDate loadData={loadData}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;