import React from 'react';
import doctor from '../../../images/doctor.png'
import './makeAppointment.css'
const MakeApointment = () => {
    return (
        <div className=' row d-flex justify-content-center  appointment-main'>
         
                <div className="col-md-4">
                    <img src={doctor} alt=""/>
                </div>
                <div className="col-md-7 pl-5 pt-5 ">
                    <h5 style={{color:'#1CC7C1'}}>APPOINTMENT</h5>
                    <h1 className='text-white'>Make An Appoinment <br/> Today</h1>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, modi qui dolores laborum explicabo, libero nulla laudantium consequatur deleniti labore ullam vero quia quis laboriosam veritatis. Magnam recusandae debitis sequi!</p>
                    <button className="btn btn-primary">APOINTMENT</button>
                </div>
            </div>
       
    );
};

export default MakeApointment;