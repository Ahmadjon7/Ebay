import React from 'react';
import './Header.scss'
import Container from '../../utils/Container';
import { HiOutlineBellAlert } from 'react-icons/hi2'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logo-image.svg';
import { useSelector } from 'react-redux';
import Search from '../search/Search';

const Header = () => {

    const location = useLocation();
    const createUserData = useSelector(state => state.creatReducer);
    const {cartProducts} = useSelector(state => state.cartReducer)

    return location.pathname.includes('/auth') ? <></> : (
        <header>
            <Container>
                <nav className='header-navbar'>
                    <ul className='header-navbar__intro'>
                        <li className='header-navbar__intro--item'>
                            <div className='header-navbar__register'>
                                Hi!
                                <Link to="/auth/login">
                                    Sign in
                                </Link>
                                or
                                <Link to="/auth/create">
                                    {
                                        createUserData.user?.email ? createUserData.user?.email : <p>Register</p>
                                    }
                                </Link>
                            </div>
                            <span>Daily Deals</span>
                            <span>Brand Outlet</span>
                            <span>Help & Contact</span>
                        </li>
                        <li className='header-navbar__shop'>
                            <p>Ship to</p>
                            <p>Sell</p>
                            <p>Watchlist</p>
                            <p>My eBay</p>
                            <div>
                                <Link to="/alert" className="header-nav__link">
                                    <HiOutlineBellAlert />
                                </Link>
                                <Link to="/addCart" className="header-nav__link">
                                    <div className='cart-leangth'>{cartProducts.length}</div>
                                    <AiOutlineShoppingCart />
                                </Link>
                            </div>
                        </li>
                    </ul>
                    <ul className='header-navbar__search'>
                        <li>
                            <Logo />
                        </li>
                        <li>
                            <Search />
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>

    );
};

export default Header;