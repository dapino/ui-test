import React from 'react';
import GeneralLayout from "../../components/Layouts/generalLayout";
import Header from '../../components/Header'

const NotFound = () => {
    return (
        <GeneralLayout>
            <Header/>
            <h1>We can't find the page you're looking for</h1>
        </GeneralLayout>
    );
};

export default NotFound;
