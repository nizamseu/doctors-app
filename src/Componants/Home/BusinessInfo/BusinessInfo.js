import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infoData =[
        {
            title:'Openingg Houres',
            description:'We are Open 7 days',
            icon:faClock,
            background:'primary'

        },
        {
            title:'Visit Our Location',
            description:'P.O. Road,Middle Badda,Dhaka',
            icon:faMapMarker,
            background:'dark'

        },
        {
            title:'Call Us Now',
            description:'+8801888888',
            icon:faPhone,
            background:'primary'

        }
    ]
    
    return (
       <section className='d-flex justify-content-center'>
           <div className='w-75 row'>
                {
                    infoData.map(info=> <InfoCard info={info}></InfoCard>)
                }
           </div>
       </section>
    );
};

export default BusinessInfo;