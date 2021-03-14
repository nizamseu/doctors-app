import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Test from '../Test';
import './RecentAppointment.css'
const RecentAppointment = () => {
    const [recent,setRecent]=useState([]);
    const [open, setOpen] = useState(false);
    const [actionId,setActionId]=useState('')
    const [isUpdate,setIsUpdate]=useState(false)


    const handleClickOpen = (id) => {
        setActionId(id)
      setOpen(true);
    };

    
    const handleClose = () => {
      setOpen(false);
    };
  
    useEffect(()=>{
        fetch(`http://localhost:5000/recent`)
        .then(res=>res.json())
        .then(data=>{
            setRecent(data)
        })

    },[actionId])


    console.log("kagu",isUpdate);
    return (
        <div style={{background:'white'}} className='mt-5'>
            <h6 className='p-2 m-3'>Recent Apppointments</h6>
            <div className='d-flex'>
            <Table  responsive className='table table-borderless' >
                <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Prescription</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        recent&& recent.map((item,index)=>
                <tr key={item._id}>
                    <td>{index+1}</td>
                    <td>{item.date}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>
                        {item.isVisited?
                        <Button variant="contained" color="primary">View</Button>
                        :<Typography> Not Visited</Typography>
                        } 
                    </td>
                    <td className='d-flex'>
                        <div>
                        {item.actionType==='Cancel' && 
                        <Typography className='RecentAppointment' style={{background:'#FF7676'}}
                        >{item.actionType}</Typography>}
                        
                        {item.actionType==='Approved' && 
                        <Typography className='RecentAppointment' style={{background:'#38AF86'}}>{item.actionType}</Typography>}
                       
                        {item.actionType==='Pending' && 
                        <Typography className='RecentAppointment' style={{background:'#76C5FF'}}>{item.actionType}</Typography>}
                        </div>


                        <div className='d-flex justify-content-center'>
                            <IconButton 
                                onClick={()=>handleClickOpen(item._id)}
                            color="primary"  component="span">
                                <EditIcon />
                            </IconButton>
                        </div>
                        
                        
                        
                       
                    </td>
                </tr>
                        )
                    }
                
                </tbody>
      </Table>
      <Dialog
       open={open}
       onClose={handleClose}
      >
    <DialogTitle>Action Type <br/></DialogTitle>
    <DialogContent>
     <Test actionId={actionId} handleClose={handleClose} setIsUpdate={setIsUpdate}></Test>
    </DialogContent>
    
       <DialogActions>
           
       <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        {/* <Button onClick={handleClose} color="primary" autoFocus>
            Submit
        </Button> */}
       </DialogActions>
      </Dialog>
            </div>
        </div>
    );
};

export default RecentAppointment;