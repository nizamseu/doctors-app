import React from 'react';
import mask from '../../../images/Mask Group 3.png'

const FeatureService = () => {
    return (
        <section className='d-flex justify-content-center mt-5'>
              <div className='row w-75 '>
               <div className='col-md-6 img-fluid'>
                    <img style={{height:'500px',width:'100%'}} src={mask} alt=""/>
                </div>

                <div className='col-md-6 pt-5 '>
                        <h2 style={{color:'#3A4256'}}>Exceptional Dental Care, On Your Terms</h2>
                        <p className='text-secondary pt-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Architecto accusantium fugiat quae est corporis ea, 
                        expedita, eos amet earum minus cupiditate laudantium? 
                        Tenetur doloremque blanditiis ut voluptatibus amet 
                        provident maiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Architecto accusantium fugiat quae est corporis ea, 
                        expedita, eos amet earum minus cupiditate laudantium? 
                        Tenetur doloremque blanditiis ut voluptatibus amet 
                        provident maiores?</p>
                        <bnt className="btn btn-primary" style={{ float:' bottom'}}>Learn More</bnt>
                </div>
                
                </div>
               
        </section>
    );
};

export default FeatureService;