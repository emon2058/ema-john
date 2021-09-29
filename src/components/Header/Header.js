import React from 'react';
import logo from '../../logo.png';
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <header>
                <img className="header-img" src={logo} alt="" />
            </header>
            <nav className="nav">
                <a href="#shop">Shop</a>
                <a href="#order">Order Review</a>
                <a href="#manage">Manage Inventory here</a>
            </nav>
            <div className="search">
                <input type="text" placeholder="type here to search"/>
            </div>
        </div>
    );
};

export default Header;