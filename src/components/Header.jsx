import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
    <header className="header">
        <img className="header__logo" src="../assets/logo-rule-of-thumb-white.png" alt="Rule of Thumb Logotype in white color" />
            <nav className="navBar">
                <ul className="nav">
                    <li className="nav__item"><a href="#">Past Trials</a></li>
                    <li className="nav__item"><a href="#">How it Works</a></li>
                    <li className="nav__item"><a href="#">Log In / Sign Up</a></li>
                </ul>
            </nav>
            <span className="icon icon--search">Search Icon</span>
    </header>
);

export default Header;
