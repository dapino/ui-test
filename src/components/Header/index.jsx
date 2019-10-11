import React from 'react';
import {Link} from "react-router-dom";
import '../../assets/styles/components/Header.scss';
import iconSearch from '../../assets/static/search-icon.png'
import Logo from "../utils/Logo";

const Header = () => (
    <header className="header">
        <Logo/>
        <nav className="navBar">
            <ul className="nav">
                <li className="nav__item">
                    <Link to="/">Past Trials</Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__item" to="/">How it Works</Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__item" to="login">Log In / Sign Up</Link>
                </li>
                <li className="nav__item">
                    <span className="icon--search">
                        <img src={iconSearch} alt=""/>
                    </span>
                </li>
            </ul>
        </nav>

    </header>
);

export default Header;
