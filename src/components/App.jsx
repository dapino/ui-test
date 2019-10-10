import React, { useState, useEffect } from 'react';

import '../assets/styles/App.scss'

import HomeLayout from "./layouts";
import Header from './Header'
import Hero from "./Hero";
import VotingCard from "./VotingCard";
import useFetchData from "../hooks/useFetchData";

const API = 'http://localhost:3000/characters'

const App = () => {
    const characters = useFetchData(API);

    return (
        <HomeLayout>
            <Header/>
            <Hero/>
            {characters.map(item =>
                <VotingCard key={item._id} {...item}>{item.name}</VotingCard>
            )}
        </HomeLayout>

    );
}

export default App;
