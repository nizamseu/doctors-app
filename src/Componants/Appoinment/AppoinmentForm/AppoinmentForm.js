
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm } from "react-hook-form";
import './AppoinmentForm.css';

const AppoinmentForm = ({card,date}) => {
  const [open, setOpen] =useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
     data.service= card;
    //  data.date=date.toLocaleDateString();
    data.isVisited=false;
    data.actionType='Pending';
    data.created= new Date();

    fetch(`http://localhost:5000/addApoinment`,{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(success=>{
        if(success){
          
          alert("Appointment Created")
        }
        handleClose()
    })

    
  };

    return (
      <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
       APPOINMENT
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className='brand-color text-center pr-5 pl-5 '>{card}</DialogTitle>
       <p className='text-center'>  {date.toDateString()}</p>

        <form  onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <input className='form' name="name" ref={register({ required: true })} placeholder='Full Name' />
          {errors.name && <span>This field is required</span>}
          <br/>

          <input className='form' name="email" ref={register({ required: true })} placeholder='Email'/>
          {errors.email && <span>This field is required</span>}
            <br/>

          <input className='form' name="phone" ref={register({ required: true })} placeholder='Phone Number' />
          {errors.phone && <span>This field is required</span>}
          <br/>

          <input className='form' name="date" defaultValue={date.toLocaleDateString()} ref={register({ required: true })} placeholder='DD/MM/YY' />
          {errors.date && <span>This field is required</span>}
          <br/><br/>
         <div className='d-flex'>
          <select className='form-select ' name="gender" ref={register}>
              <option value="female">Male</option>
              <option value="male">Female</option>
              <option value="other">Other</option>
            </select>

            <input className='form-select' name="age" ref={register({ required: true })} placeholder='Your Age' />
            {errors.age && <span>This field is required</span>}
            
            <input className='form-select' name="weight" ref={register({ required: true })} placeholder='Your weight' />
            {errors.weight && <span>This field is required</span>}
        
         </div>
   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button  type="submit" color="primary">
            Submit
          </Button>
         
        </DialogActions>
        </form>
      </Dialog>
    </div>
       
    );
};

export default AppoinmentForm;