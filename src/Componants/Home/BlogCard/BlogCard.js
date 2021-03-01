import React from 'react';
import { Card } from 'react-bootstrap';
import  './blogCard.css';
const BlogCard = ({blogItem}) => {
    console.log(blogItem);

    return (
        <Card 
        style={{ width: '19rem',marginLeft:'15px',paddingBottom:'30px'}} >
            
            <div className='text-center'>
               <div className=' d-flex blogCard'>
                <img src={blogItem.img} alt=""/>
                    <div className='blogCardText'>
                        <h6>{blogItem.name}</h6>
                        <small style={{color:'#adb5bd'}}>{blogItem.date}</small>
                    </div>
               </div>

                <div className='text-justify'>
                    <h5>{blogItem.title}</h5>
                    <small>{blogItem.description}</small>
                </div>
            </div>
        </Card>
    );
};

export default BlogCard;