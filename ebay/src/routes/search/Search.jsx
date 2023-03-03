import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Container from '../../utils/Container';
import { Link } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import { v4 } from 'uuid';
import './Search.scss'

const Search = () => {

    const productInfo = useParams();

    var [data, isLoading] = useFetchData(`/products/?title=${productInfo.productName}`)


    return (
        <section className='search-result'>

            <Container>
                <div className="search-result__wrapper">
                    {!isLoading ?
                        data.map(serachItem =>
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
                        ) :
                        <Loader />
                    }
                </div>
            </Container>
        </section>
    );
};

export default Search;