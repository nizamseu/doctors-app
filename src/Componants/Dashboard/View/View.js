
import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const View = () => {
    const {id}=useParams();
    const [view,setView]=useState([]);
    const history=useHistory()
console.log(view);
    useEffect(()=>{
        fetch('http://localhost:5000/view',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({id})

        })
        .then(res=>res.json())
        .then(data=>setView(data))
    },[])
    
    return (
        <div className='not_Found d-flex'>
            
            { view.length?
           
            <div className='w-75'>   
                <h3> Name: {view[0].name} </h3>
                <h4>Service : {view[0].service}</h4>
                <h6> Email: {view[0].email} </h6>
                <h6> Age: {view[0].age} </h6>
                <h6> Gender: {view[0].gender} </h6>
                <h6> Weight: {view[0].weight} </h6>
                <h6> Date: {view[0].Date} </h6>
                <h6> Created Date: {view[0].created} </h6>
                <h6> Phone: {view[0].phone} </h6>
                <Button variant="contained" color="secondary" onClick={()=> history.goBack()}>Back</Button>
            </div>
            :<h1>Loading......</h1>
            }
               
        </div>
    );
};

export default View;