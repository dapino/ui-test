import React from 'react';
import { Link } from "react-router-dom";

import '../../../assets/styles/components/Logo.scss';

const Logo = () => (
    <Link className="header__logo" to="/">
        <span>Rule of Thumb.</span>
    </Link>
);

export default Logo;
