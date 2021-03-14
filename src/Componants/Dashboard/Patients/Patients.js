import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Patients = () => {
    const [allPatients,setAllPatients]=useState([]);
    

    useEffect(()=>{
        fetch('http://localhost:5000/allpatients')
        .then(res=>res.json())
        .then(data=>setAllPatients(data))
    },[])
    return (
        <div  className='mt-3 ml-3 mr-3'>
            <h5>Patients</h5>
           <div style={{backgroundColor:'white'}} className='p-3 mt-5'>
            <h5 className='pb-3'>All Patients</h5>
            <Table  responsive className='table table-borderless ' >
        <thead>
          <tr style={{color:'gray'}}>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Contact</th>
            <th>Service</th>
            
          </tr>
        </thead>
        <tbody>
              {
                  allPatients&& allPatients.map((item,index)=>
          <tr key={item._id}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.age}</td>
            <td>{item.weight} kg</td>
            <td>{item.phone}</td>
            <td>{item.service}</td>
          </tr>
                  )
              }
        
        </tbody>
      </Table>
        </div>
        </div>
    );
};

export default Patients;