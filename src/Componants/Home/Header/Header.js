import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import MenuBar from '../MenuBar/MenuBar';
import './header.css'
const Header = () => {
    return (
        <div className='header-contrainer'>
            <MenuBar></MenuBar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;