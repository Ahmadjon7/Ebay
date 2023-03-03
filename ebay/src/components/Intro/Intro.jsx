import React from 'react';
import Container from '../../utils/Container';
import Main  from '../images/intro-image.png'
import './Intro.scss'

const Intro = () => {
    return (
        <Container>
            <div className='wrapper-intro'>
                <ul className='wrapper-intro--list'>
                    <li>Home</li>
                    <li>Saved</li>
                    <li>Motors</li>
                    <li>Electronics</li>
                    <li>Collectibles</li>
                    <li>Home & Garden</li>
                    <li>Fashion</li>
                    <li>Toys</li>
                    <li>Sporting Goods</li>
                    <li>Business & Industrial</li>
                    <li>Jewelry & Watches</li>
                    <li>eBay Live</li>
                    <li>Refurbished</li>
                </ul>
                <img src={Main} alt="main-img" />
            </div>
        </Container>
    );
};

export default Intro;