import React, { useState, useEffect } from 'react';

const VotingCard = props => {
    let { name, category, about, picture, registered, votes } = props

    return (
        <div>
            <img src={picture} alt=""/>
            <p>{name}</p>
            <p>{category}</p>
            <p>{about}</p>
            <p>{registered}</p>
            <p>{votes.positives}</p>
            <p>{votes.negatives}</p>
        </div>

    );
}

export default VotingCard;
