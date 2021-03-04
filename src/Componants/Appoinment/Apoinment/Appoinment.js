import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import AppoinmentAvailable from '../AppoinmentAvailable/AppoinmentAvailable';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';

const Appoinment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date())
    const handleDate = date=>{
        setSelectedDate(date)
    }
    console.log(selectedDate);
    return (
        <div>
            <MenuBar></MenuBar>
            <AppoinmentHeader handleDate={handleDate}></AppoinmentHeader>
            <AppoinmentAvailable date={selectedDate}></AppoinmentAvailable>
            <Footer></Footer>
          
         

        </div>
    );
};

export default Appoinment;