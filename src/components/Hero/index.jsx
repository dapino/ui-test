import React from 'react';
import '../../assets/styles/components/Hero.scss';
import '../../assets/styles/components/VotingCard.scss';
import heroBackground from '../../assets/static/pope.jpg'
import useFetchData from "../../hooks/useFetchData";
import VotingCard from "../VotingCards/votingCard";

const API = 'http://localhost:3000/characters'

const heroStyle = {
    backgroundImage: `url(${heroBackground})`
};

const Header = () => {
    //TODO: fix repeated useFetchData call in home
    const charactersData = useFetchData(API);
    const characters = charactersData.filter(character => character.isFeatured)
    return (
        <section className="hero" style={heroStyle}>
            <div className="container">
                <div className="row">
                    {characters.map(item =>
                        <div className="col col-6">
                            <VotingCard key={item._id} imageBg={false} {...item}>{item.name}</VotingCard>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Header;
