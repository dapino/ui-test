import React from 'react';
import '../../assets/styles/components/VotingCard.scss';
import VotingCard from "./votingCard";
import useFetchData from "../../hooks/useFetchData";
import GeneralLayout from "../Layouts/generalLayout";

const API = 'http://localhost:3000/characters'

const VotingCards = () => {
    const charactersData = useFetchData(API);
    const characters = charactersData.filter(character => !character.isFeatured)
    return (
        <div className="container">
            <h2>Votes</h2>

            <div className="row">
                {characters.map(item =>
                    <div className="col col-6">
                        <VotingCard key={item._id} {...item}>{item.name}</VotingCard>
                    </div>
                )}
            </div>

        </div>
    );
};

export default VotingCards;
