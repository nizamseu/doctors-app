import React from 'react';
import Blog from '../Blog/Blog';
import ContractUs from '../ContractUs/ContractUs';
import Doctors from '../Doctors/Doctors';
import FeatureService from '../FeatureService/FeatureService';
import Footer from '../Footer/Footer';
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
            <Blog></Blog>
            <Doctors></Doctors>
            <ContractUs></ContractUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;