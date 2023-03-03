import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from '../../utils/Container';
import { v4 } from 'uuid';

const Cart = () => {

    const { cartProducts } = useSelector(state => state.cartReducer)

    return (
        <Container>
            <div className="search-result__wrapper">
                {
                    cartProducts.map(serachItem =>
                        <div className="search-result__item" key={v4()}>
                            <Link to={`/product/${serachItem.id}`}>
                                <img src={serachItem.images?.at(0)} alt="search-result__image" className="search-result__image" />
                            </Link>
                            <div>
                                <h2 className="search-result__title">{serachItem.title}</h2>
                                <p className="search-result__text">{serachItem.description}</p>
                                <strong className="search-result__price">${serachItem.price}</strong>
                            </div>
                        </div>
                    )
                }
            </div>
        </Container>

    );
};

export default Cart;