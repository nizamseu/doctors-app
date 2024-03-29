import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AppointmentSortList from "../AppointmentSortList/AppointmentSortList";

const AppointmentsByDate = ({ loadData }) => {
  const [loadAppointment, setLoadAppointment] = useState([]);

  // useEffect(()=>{

  //     fetch('https://lit-brook-48702.herokuapp.com/appointmentData')
  //     .then(res=>res.json())
  //     .then(result=>{
  //        setLoadAppointment(result)
  //     })

  // },[])

  return (
    <div style={{ background: "white" }}>
      <h6 className=" mt-5 pt-3 pl-3 d-flex brand-color">Appointments</h6>
      {loadData.length ? (
        <AppointmentSortList loadData={loadData}></AppointmentSortList>
      ) : (
        <h6>No Appointment For this Date</h6>
      )}
    </div>
  );
};

export default AppointmentsByDate;
