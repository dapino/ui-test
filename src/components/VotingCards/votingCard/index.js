import React, {useEffect} from 'react';
import placeholderImage from '../../../assets/static/malala.jpg'
import thumbIcon from '../../../assets/static/thumb-icon.png'
import '../../../assets/styles/components/VotingCard.scss';

const VotingCard = props => {
    const {_id, name, category, about, registered, votes} = props
    const backgroundImageStyle = {
        backgroundImage: `url(${placeholderImage})`,
        height: 500
    };
    const backgroundBlurStyle = {
        background: "transparent",
        height: 300
    };

    //TODO create images service
    //TODO: create function to calculate tima ago for "registered"
    //TODO: create percentage bar
    //TODO: define hook for form submit to add votes

    return (
        <div className="votingCard" style={props.imageBg !== false ? backgroundImageStyle : backgroundBlurStyle}>
            <header>
                <h3 className="votingCard__title">{name}</h3>
                <span className="votingCard__tagline">{registered} in {category}</span>
            </header>
            <div className="votingCard__content">
                <p className="votingCard__text">{about}</p>
            </div>
            <form className="votingCard__action">
                <label className="thumbButton thumbButton--up" htmlFor={`thumbUp-${_id}`}>
                    <input type="radio" name="thumbs" value="thumbUp" id={`thumbUp-${_id}`}/>
                    <span className="thumbButton__custom thumbButton__custom--up">
                        <img src={thumbIcon} alt="thumbs up"/>
                    </span>
                </label>
                <label className="thumbButton thumbButton--down" htmlFor={`thumbDown-${_id}`}>
                    <input type="radio" name="thumbs" value="thumbDown" id={`thumbDown-${_id}`}/>
                    <span className="thumbButton__custom thumbButton__custom--down">
                        <img src={thumbIcon} alt="thumbs down"/>
                    </span>
                </label>
                <button className="button button--primary" type="submit">Vote Now</button>
            </form>

            <div className="votingCard__percentageBar">
                <span className="icon--thumbUp">{votes.positives}</span>
                <span className="icon--thumbDown">{votes.negatives}</span>
            </div>
            {props.imageBg === false && <div className="bgBlurred"/>}
        </div>
    );
};

export default VotingCard;
