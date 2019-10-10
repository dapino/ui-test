import React from 'react';
import '../../assets/styles/components/Hero.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="hero">
                <img src="" alt=""/>
                <div className="votingCard">
                    <header>
                        <span className="votingCard__tagline">what's...</span>
                        <h3 className="votingCard__title">Pope</h3>
                    </header>
                    <div className="votingCard__content">
                        <p className="votingCard__text">lipsum</p>
                        <a className="moreInfo" href="#">more</a>
                    </div>
                    <form className="votingCard__action">
                        <span className="thumbButton thumbButton--up">
                            <input type="radio" name="thumbs" value="thumbUp" id="thumbUp"/>
                            <label htmlFor="thumbUp">Thumb Up</label>
                        </span>
                        <span className="thumbButton thumbButton--up">
                            <input type="radio" name="thumbs" value="thumbDown" id="thumbDown"/>
                            <label htmlFor="thumbDown">Thumb Down</label>
                        </span>
                        <button type="submit">Vote Now</button>
                    </form>
                    <div className="votingCard__percentageBar">
                        <span className="icon--thumbUp">l</span>
                        <span className="icon--thumbDown">l</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;
