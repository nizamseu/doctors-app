import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AppointmentSortList from '../AppointmentSortList/AppointmentSortList';

const AppointmentsByDate = ({loadData}) => {
    const [loadAppointment,setLoadAppointment]=useState([]);

    // useEffect(()=>{

    //     fetch('http://localhost:5000/appointmentData')
    //     .then(res=>res.json())
    //     .then(result=>{
    //        setLoadAppointment(result)
    //     })

    // },[])

    console.log(loadAppointment);
    return (
        <div>
            <h1 className=' mt-5 d-flex  justify-content-center '>Appointments</h1>
            {
              loadData.length 
            ? 
              <AppointmentSortList loadData={loadData}></AppointmentSortList>
            : <h6>No Appointment For this Date</h6>
            }

        </div>
    );
};

export default AppointmentsByDate;