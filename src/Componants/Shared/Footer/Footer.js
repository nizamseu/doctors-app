import { Button } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
   const date= new Date().getFullYear()
    return (
        <div style={{color:'gray'}} className='row d-flex justify-content-center mt-5 p-5 '>
           
           <div className="col-md-3">
              <br/><br/><br/>
               <h6>Emergency Dental Care</h6>
               <h6>Check Up</h6>
               <h6>Treatment Of Personal Diseases</h6>
               <h6>Tooth Extraction</h6>
              <h6>Check Up</h6>
            </div>



           <div className="col-md-3">
              <h5 style={{color:'brand-color',marginBottom:'35px'}}>Our Services</h5>
              <h6>Emergency Dental Care</h6>
              <h6>Check Up </h6>
              <h6>Treatment Of Personal Diseases</h6>
              <h6>Tooth Extraction</h6>
              <h6>Check Up</h6>
              <h6>Check Up</h6>
              <h6>Check Up</h6>
            </div>  



           <div className="col-md-3">
             <h5 style={{color:'brand-color',marginBottom:'35px'}}> Oral Health</h5>
            
              <h6>Emergency Dental Care</h6>
              <h6>Check Up </h6>
              <h6>Treatment Of Personal Diseases</h6>
              <h6>Tooth Extraction</h6>
              <h6>Check Up</h6>
              <h6>Check Up</h6>
              <h6>Check Up</h6>
            </div>



           <div className="col-md-3">
              <h5 style={{color:'brand-color',marginBottom:'35px'}}> Our Address</h5>
             <h6> New York-1010010 Hydson Yard</h6>
               <div style={{color:'#1CC7C1'}} className='mt-5 mb-5'>
               
               <FontAwesomeIcon
                  icon={faFacebook}
                  size='4x'
                  transform="shrink-6 left-5"
                ></FontAwesomeIcon>

                <FontAwesomeIcon
                  icon={faGoogle}
                  size='4x'
                  transform="shrink-6 left-5 "
                  
                 
                ></FontAwesomeIcon>

                <FontAwesomeIcon
                  icon={faTwitter}
                  size='4x'
                  transform="shrink-6 left-5"
                  
                ></FontAwesomeIcon>
            
               </div>
               <h6>Call Now</h6>
               <Button variant="contained" color="primary">+01827612791</Button>
            </div>
<h6 className='text-center mt-5'> copyright {date} All Right Reserved </h6>
        </div>
    );
};

export default Footer;