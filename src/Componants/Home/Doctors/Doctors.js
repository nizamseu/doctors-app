import React, { useEffect, useState } from 'react';
import doctor from '../../../images/doctor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
const Doctors = () => {
    const [doctors,setDoctors]=useState([])

useEffect(()=>{
    fetch('http://localhost:5000/doctors')
    .then(res=>res.json())
    .then(data=>{setDoctors(data)})
},[])



    // const doctors =[
    //     {
    //         name:'Dr.Majnu Mia',
    //         phone:'+8801827612791',
    //         img:doctor
    //     },
    //     {
    //         name:'Dr.Majnu Mia',
    //         phone:'+8801827612791',
    //         img:doctor
    //     },
    //     {
    //         name:'Dr.Majnu Mia',
    //         phone:'+8801827612791',
    //         img:doctor
    //     }
    // ]

    return (
        <div className='row d-flex justify-content-center mb-5 mt-5 pt-5'>
            <h5 style={{color:'#1CC7C1',textAlign:'center'} }>Our Doctors</h5>
            <div className='w-75 row mt-5'>
                {
                    doctors?.map(doctor=> <div className='d-flex col-md-4'>
                           <div className='ml-5'>
                           {/* <img style={{height:'150px'}} src={doctor?.image?.img} alt=""/> */}
                           <img style={{height:'250px',width:'230px',marginTop:'20px'}} src={`data:image/jpeg;base64,${doctor?.image?.img} `}/>
                            <h3>{doctor.name}</h3>
                            <FontAwesomeIcon style={{marginRight:'10px'}} icon ={faPhoneAlt} color='#1CC7C1' ></FontAwesomeIcon>
                            {doctor.email}
                           </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Doctors;