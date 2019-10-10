import React from 'react';

import '../../assets/styles/components/Header.scss';
import iconSearch from '../../assets/static/search-icon.png'

const Header = () => (
    <header className="header">

            <nav className="navBar">
                <ul className="nav">
                    <li className="nav__item"><a href="#">Past Trials</a></li>
                    <li className="nav__item"><a href="#">How it Works</a></li>
                    <li className="nav__item"><a href="#">Log In / Sign Up</a></li>
                </ul>
            </nav>
            <span className="icon icon--search">
                <img src={iconSearch} alt=""/>
            </span>
    </header>
);

export default Header;
