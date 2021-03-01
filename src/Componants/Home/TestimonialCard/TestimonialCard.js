import React from 'react';
import { Card } from 'react-bootstrap';
const TestimonialCard = ({data}) => {

    return (
        <Card  style={{ width: '19rem',marginLeft:'15px'}} >
            <p>{data.description}</p>
            <div className='text-center'>
                <img src={data.img} alt=""/>
                <div>
                    <h5>{data.name}</h5>
                    <small>{data.location}</small>
                </div>
            </div>
        </Card>
    );
};

export default TestimonialCard;