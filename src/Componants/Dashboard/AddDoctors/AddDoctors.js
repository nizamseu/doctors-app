import { Alert } from 'bootstrap';
import React, { useState } from 'react';



const AddDoctors = () => {
    const [info,setInfo]=useState({});
    const [file,setFile]=useState(null)
    const [status,setStatus]=useState(false)

    const handleBlur = e =>{
        const newInfo={...info};
         newInfo[e.target.name]=e.target.value;
        setInfo(newInfo)
    }

    const handleChange = e =>{

        const newFile =e.target.files[0];
        setFile(newFile)
    }


const handleSubmit=(e)=>{
 const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('http://localhost:5000/adddoctor', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
                setStatus(data)
        })
        .catch(error => {
            console.error(error)
        })
e.preventDefault();
e.target.reset();
}


    return (
        <div>
            <h2 className='brand-color text-center  mt-5'>Add Doctors</h2>
        <div className='d-flex justify-content-center pl-5'>
            <form onSubmit={handleSubmit} >
                <label >Email</label><br/>
                <input onBlur={handleBlur} type="email" name="email"  placeholder="email Address"/><br/>
                <label >Name</label><br/>
                <input onBlur={handleBlur} type="text" name="name" placeholder="Name" /><br/>
                <label >Upload Your File</label><br/>
                <input onChange={handleChange} type="file" name="file" placeholder="Upload Your File" /><br/><br/>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>    

        {
            status&& <p className='text-center' style={{color:'green'}}>Doctor Added</p> 
        }
        {
            status && setTimeout(()=>{
                setStatus(false)
            },3000)
        }
        </div>
    );
};

export default AddDoctors;