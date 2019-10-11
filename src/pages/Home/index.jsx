import React, { Component } from 'react';
import GeneralLayout from "../../components/Layouts/generalLayout";
import Header from '../../components/Header'
import Hero from "../../components/Hero";
import VotingCards from "../../components/VotingCards";

const Home = () => {
    return (
        <GeneralLayout>
            <Header/>
            <Hero/>
            <VotingCards/>
        </GeneralLayout>
    );
};

export default Home;
