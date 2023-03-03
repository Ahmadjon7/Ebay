import React from 'react';
import Container from '../../utils/Container';
import { AiOutlineArrowRight } from "react-icons/ai"
import ebay  from '../images/div (1).png'
import leftImg  from '../images/div.png'
import rightImg  from '../images/div-right.png'
import './Ebay.scss'
const Ebay = () => {
    return (
        <section className='wrapper-ebay'>
            <Container>
                <div className='wrapper-ebay__box'>
                    <ul className='wrapper-ebay__list'>
                        <li className='wrapper-ebay__item'>
                            <span>Featured</span>
                            <img src={ebay} alt="" />
                            <h4>Deals made easy all year long.</h4>
                            <p>Free shipping. Best prices.</p>
                            <div className='wrapper-ebay__btn'>
                                Get your thing
                                <AiOutlineArrowRight/>
                            </div>
                        </li>
                        <li className='wrapper-ebay__item'>
                            <img src={leftImg} alt="" className='wrapper-ebay__image' />
                        </li>
                    </ul>
                    <img src={rightImg} alt="" />
                </div>
            </Container>
        </section>
    );
};

export default Ebay;