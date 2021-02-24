import React from 'react';
import FeatureService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import MakeApointment from '../MakeApointment/MakeApointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <MakeApointment></MakeApointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;