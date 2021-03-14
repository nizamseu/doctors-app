import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Test from '../Test';

const DashBoardAppointmenta = () => {
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
        <section className='d-flex'>
            <div style={{background:'white'}} className="col-md-6 mt-5 pt-3 d-flex justify-content-center">
                    <Calendar
                    className='reactCalendar'
                  onChange={handleDate}
                  value={new Date()}
                      />
            </div>

            <div className="col-md-6">
            <AppointmentsByDate loadData={loadData}></AppointmentsByDate>
           
            </div>
           <div>
          
           </div>
        </section>
    );
};

export default DashBoardAppointmenta;