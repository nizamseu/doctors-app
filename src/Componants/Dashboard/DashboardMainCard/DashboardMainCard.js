import { Card, Typography} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const DashboardMainCard = ({loadData}) => {
    const date =new Date().toLocaleDateString();
    const [today,setToday]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/today',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({date})
        })
        .then(res=>res.json())
        .then(result=>{
            console.log("valuee",result);
            setToday(result)
        })

    },[])
const pa =loadData.filter(item=>item.email)
console.log("lll",loadData);
 console.log("mm",pa);
    return (
    <section className='d-flex'>
         <Card style={{width:'20rem',background:'#F1536E',color:'white'}} className='d-flex align-items-center m-2 p-3'>
          <Typography variant='h2'>{today.length}</Typography>
          <Typography className='pl-4'>Today's <br/> Appointment</Typography>
        </Card>

        <Card style={{width:'20rem',background:'#3DA5F4',color:'white'}} className='align-items-center d-flex m-2 p-3'>
        <Typography variant='h2'>09</Typography>
          <Typography className='pl-4'>Pending <br/> Appointment</Typography>
        </Card>

        <Card style={{width:'20rem',background:'#00C689',color:'white'}} className='d-flex align-items-center m-2 p-3'>
        <Typography variant='h2'>{loadData.length}</Typography>
          <Typography className='pl-4'>Total<br/> Appointment</Typography>
        </Card>

        <Card style={{width:'20rem',background:'#FDA006',color:'white'}} className='d-flex align-items-center m-2 p-3'>
        <Typography variant='h2'>09</Typography>
          <Typography className='pl-4'>Total <br/> Patients</Typography>
        </Card>
    </section>
    );
};

export default DashboardMainCard;