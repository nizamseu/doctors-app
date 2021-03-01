import React from 'react';
import BlogCard from '../BlogCard/BlogCard'
import el1 from '../../../images/Ellipse 1.png';
import el2 from '../../../images/Ellipse 2.png';
import el3 from '../../../images/Ellipse 3.png';
const Blog = () => {
    const blogData =[
        {
            name:'Nizam Uddn',
            title:'2 times of brudh in a day can keep you healthy',
            description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae similique eum dolores laboriosam aperiam asperiores veritatis deleniti temporibus perspiciatis? Ea, quaerat. Ea qui repellendus facere veritatis consequuntur delectus consectetur repellat!',
            location:'Dhaka',
            img:el1,
            date: new Date().toLocaleDateString()
        },
        {
            name:'Stive Jobs',
            title:'2 times of brudh in a day can keep you healthy',
            description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae similique eum dolores laboriosam aperiam asperiores veritatis deleniti temporibus perspiciatis? Ea, quaerat. Ea qui repellendus facere veritatis consequuntur delectus consectetur repellat!',
            location:'California',
            img:el2,
            date: new Date().toLocaleDateString()
        },
        {
            name:'Elon Mask',
            title:'2 times of brudh in a day can keep you healthy',
            description:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae similique eum dolores laboriosam aperiam asperiores veritatis deleniti temporibus perspiciatis? Ea, quaerat. Ea qui repellendus facere veritatis consequuntur delectus consectetur repellat!',
            location:'SpaceX',
            img:el3,
            date: new Date().toLocaleDateString()
        },
    ]
    return (
        <div className='row  d-flex justify-content-center mt-5'>
            <div className='w-75 mt-5'>
                <div className='text-center mb-5'>
                <h5 style={{color:'#1CC7C1'}}>Our Blog</h5>
                <h1 style={{color:'#3A4256'}}> From Our Blog News</h1>
                </div>
                  
                <div className='row '>
                {
                    blogData.map(blogItem => <BlogCard blogItem={blogItem}></BlogCard>)
                }
                </div>
                
            </div>
        </div>
    );
};

export default Blog;