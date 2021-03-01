import { Button } from '@material-ui/core';
import React from 'react';

const ContactDetails = () => {
    return (
        <div className='text-white mt-5'>
              
              <h5>Contact Us</h5>
              <h1>Always Connect With Us</h1>
              
            <form className='form' >
            <input type="text"  cols="100" placeholder='Email Address*'/><br/>
            <input type="text" cols="100" placeholder='Subject*'/><br/>
            <textarea type="text" rows="5" cols="100" placeholder='Your Message*'/><br/>
            <Button variant="contained" color="primary">Submit</Button>
            </form>

        </div>
    );
};

export default ContactDetails;