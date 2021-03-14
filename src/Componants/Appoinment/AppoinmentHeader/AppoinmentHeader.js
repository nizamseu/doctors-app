import React, { useState } from 'react';
import Calendar from 'react-calendar';
import chair from '../../../images/chair.png'
import 'react-calendar/dist/Calendar.css';
const AppoinmentHeader = ({handleDate}) => {
  
   
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
                    <h4 className='header-text pb-3'>Appoinment</h4>
                    <Calendar 
                        className='reactCalendar'
                        onChange={handleDate}
                        value={new Date()}
                    />
            </div>
            <div className="col-md-6">
             <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default AppoinmentHeader;