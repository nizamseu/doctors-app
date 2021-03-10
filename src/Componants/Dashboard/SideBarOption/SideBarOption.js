import { faWindows } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './sidebarOption.css';

const SideBarOption = ({text,Icon,pathText}) => {


    return (
        <div >
           
            <Link to={pathText} style={{textDecoration:'none', color:'black'}} className='sidebarOption'>
            <Icon />
            
            <h6>{text}</h6>
            </Link>
        </div>
    );
};

export default SideBarOption;