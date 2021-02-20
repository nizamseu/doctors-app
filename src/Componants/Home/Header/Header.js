import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import MenuBar from '../MenuBar/MenuBar';
import './header.css'
const Header = () => {
    return (
        <div className='header-contrainer'>
            <MenuBar></MenuBar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;