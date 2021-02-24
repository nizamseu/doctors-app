import React from 'react';
import fluride from '../../../images/fluride.png'
import caveti from '../../../images/caveti.png'
import tooth from '../../../images/tooth.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const serviceData =[
        {
            name:'Fluride Treatment',
            img:fluride
        },
        {
            name:'Cavity Filling',
            img:caveti
        },
        {
            name:'Teeth Whitening',
            img:tooth
        },
    ]
    return (
        <section > 
            <div className='text-center mt-5'>
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Service We Provide</h2>
            
            </div>
           
            <div className='d-flex justify-content-center'>
            <div className='w-75 row mt-5 p-5'>
                {
                    serviceData.map(service=> <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
            </div>
        </section>

           
    );
};

export default Services;