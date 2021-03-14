import { Dialog } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ViewDialog from '../ViewDialog/ViewDialog';

const Prescription = () => {
    const [prescription,setPrescription]=useState([]);
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
    };


    useEffect(()=>{
        fetch('http://localhost:5000/allpatients')
        .then(res=>res.json())
        .then(data=>setPrescription(data))
    },[])
    return (
        <div  className='mt-3 ml-3 mr-3'>
            <h5>Prescription</h5>
           <div style={{backgroundColor:'white',marginRight:'50px'}} className='p-3 mt-5'>
            <h5 className='pb-3'>All Prescription</h5>
            <Table  responsive className='table table-borderless ' >
        <thead>
          <tr style={{color:'gray'}}>
            <th>Sr.No</th>
            <th>Date</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Prescription</th>
            
          </tr>
        </thead>
        <tbody>
              {
                  prescription&& prescription.map((item,index)=>
          <tr key={item._id}>
            <td>{index+1}</td>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>
                <Link to={`/dashboard/view/${item._id}`} variant="contained" color="primary">View</Link>
            
            </td>
          </tr>
           )}
    
        </tbody>
      </Table>
        </div>
        
        </div>
    );
};

export default Prescription;