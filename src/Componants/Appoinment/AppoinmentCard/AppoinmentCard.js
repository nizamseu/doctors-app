import { Card } from '@material-ui/core';
import { Button} from 'bootstrap';
import React, { useState } from 'react';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';


const AppoinmentCard = ({card,date}) => {
   
    return (
        
        <Card style={{width:'20rem'}} className='m-2 p-3'>
            <h4 className='brand-color'>{card.subject}</h4>
            <h5 style={{fontWeight:'bold'}}> {card.visitingHour} </h5>
            <h6 style={{color:'gray'}}> {card.totalSpace} Space Available</h6>

            <AppoinmentForm card={card.subject} date={date}></AppoinmentForm>
        </Card>
        
       
        
    );
};

export default AppoinmentCard;