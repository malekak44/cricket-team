import React from 'react';
import Icon from '../../icon.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={Icon} alt="icon" />
            <h1>ENGLAND CRICKET TEAM</h1>
        </div>
    );
};

export default Header;