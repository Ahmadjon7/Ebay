import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../utils/Container';
import { AiFillTwitterSquare, AiFillFacebook } from 'react-icons/ai'
import './Footer.scss';
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    return location.pathname.includes("/auth") ? <></> : (
        <footer>
            <Container>
                <ul className='footer-list'>
                    <li className='footer-item'>
                        <p>Buy</p>
                        <Link>Registration</Link>
                        <Link>eBay Money Back Guarantee</Link>
                        <Link>Bidding & buying help</Link>
                        <Link>Stores</Link>
                        <Link>eBay for Charity</Link>
                        <Link>Charity Shop</Link>
                        <Link>Seasonal Sales and events</Link>
                    </li>
                    <li className='footer-item'>
                        <div>
                            <p>Sell</p>
                            <Link>Start selling</Link>
                            <Link>How to sell</Link>
                            <Link>Business sellers</Link>
                            <Link>Affiliates</Link>
                        </div>
                        <div>
                            <p>Tools & apps</p>
                            <Link>Tools & apps</Link>
                            <Link>Security center</Link>
                            <Link>Site map</Link>
                        </div>
                    </li>
                    <li className='footer-item'>
                        <p>Stay connected</p>
                        <span>
                            <AiFillFacebook />
                            <Link>Facebook</Link>
                        </span>
                        <span>
                            <AiFillTwitterSquare />
                            <Link>Twitter</Link>
                        </span>
                    </li>
                    <li className='footer-item'>
                        <p>About eBay</p>
                        <Link>Company info</Link>
                        <Link>News</Link>
                        <Link>Investors</Link>
                        <Link>Careers</Link>
                        <Link>Diversity & Inclusion</Link>
                        <Link>Global Impact</Link>
                        <Link>Government relations</Link>
                        <Link>Advertise with us</Link>
                        <Link>Policies</Link>
                        <Link>Verified Rights Owner (VeRO) Program</Link>
                        <Link>eCI Licenses</Link>
                    </li>
                    <li className='footer-item'>
                        <div>
                            <p>Help & Contact</p>
                            <Link>Seller Center</Link>
                            <Link>Contact Us</Link>
                            <Link>eBay Returns</Link>
                        </div>
                        <div>
                            <p>Community</p>
                            <Link>Announcements</Link>
                            <Link>eBay Community</Link>
                            <Link>eBay for Business Podcast</Link>
                        </div>
                        <div>
                            <p>eBay Sites</p>
                            <select>
                                <option>United States</option>
                            </select>
                        </div>
                    </li>
                </ul>
                <p className='footer-discription'>
                    <span>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</span>
                    <Link>Accessibility</Link>
                    ,
                    <Link>User Agreement</Link>
                    ,
                    <Link>Privacy</Link>

                    ,
                    <Link>Payments Terms of Use</Link>

                    ,
                    <Link>Cookies</Link>

                    ,
                    <Link>Your Privacy Choices</Link>

                    <b>and</b>
                    <Link>AdChoice</Link>
                </p>
            </Container>
        </footer>
    );
};

export default Footer;