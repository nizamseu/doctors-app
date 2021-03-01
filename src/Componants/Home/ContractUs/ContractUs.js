import React from 'react';
import ContactDetails from './ContactDetails';
import './contactUs.css'

const ContractUs = () => {
    return (
        <div className='row  d-flex justify-content-center mb-5 mt-5 pt-5 '>
            <div className='w-75 contactUs text-center '>
                <div className='contact'>
                <ContactDetails></ContactDetails>
                </div>
            </div>
        </div>
    );
};

export default ContractUs;