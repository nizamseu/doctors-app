import React from 'react';
import el1 from '../../../images/Ellipse 1.png';
import el2 from '../../../images/Ellipse 2.png';
import el3 from '../../../images/Ellipse 3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core';
import './testimonial.css'
import TestimonialCard from '../TestimonialCard/TestimonialCard';
const Testimonial = () => {
    const testimnialData =[
        {
            name:'nizam Uddn',
            description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae similique eum dolores laboriosam aperiam asperiores veritatis deleniti temporibus perspiciatis? Ea, quaerat. Ea qui repellendus facere veritatis consequuntur delectus consectetur repellat!',
            location:'Dhaka',
            img:el1,
        },
        {
            name:'Stive Jobs',
            description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae similique eum dolores laboriosam aperiam asperiores veritatis deleniti temporibus perspiciatis? Ea, quaerat. Ea qui repellendus facere veritatis consequuntur delectus consectetur repellat!',
            location:'California',
            img:el2,
        },
        {
            name:'Elon Mask',
            description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae similique eum dolores laboriosam aperiam asperiores veritatis deleniti temporibus perspiciatis? Ea, quaerat. Ea qui repellendus facere veritatis consequuntur delectus consectetur repellat!',
            location:'SpaceX',
            img:el3,
        },
    ]
    return (
        <div className ='d-flex justify-content-center mt-5'>
          
            <div className='w-75 row mt-5 pt-5'>
                <div className="col-md-6 ">
                <h5 style={{color:'#1CC7C1'}}>TESTIMONIAL</h5>
                 <h1>What's Your Patients <br/> Says</h1>
                </div>
                <div className="col-md-6 testiminial">
                   <FontAwesomeIcon
                   icon={faQuoteLeft}
                   size="9x"
                   pull="right"
                   ></FontAwesomeIcon>
                </div>
          
            

            <div className='row testiminialCard'> 
            {
              testimnialData.map(data=><TestimonialCard data={data}></TestimonialCard>)
            }
            </div>
           
         

            </div>
        </div>
    );
};

export default Testimonial;