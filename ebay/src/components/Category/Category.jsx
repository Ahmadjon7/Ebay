import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import Container from '../../utils/Container';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader'
import './Category.scss'



const Category = () => {

    const [data , isLoading] = useFetchData(`categories/3/products`)

    function trimDescription(str) {
        return str.split(" ").slice(0, 8).join(" ") + "..."
    }
    return (
        <div>
            <section className='search-section'>
                <Container>
                <div className="search-results__wrapper">
                    {!isLoading ? 
                        data.map( categories => 
                            <div  className="search-results__item" key={categories.id}>
                                <Link to={`/product/${categories.id}`}>
                                    <img src={categories.images?.at(0)} width={300} alt="search-results__image" className="search-results__image" />
                                </Link>
                                <div className='search-results--tabs'>
                                    <h2 className="search-results__title">{categories.title}</h2>
                                    <p className="search-results__text">{trimDescription(categories.description)}</p>
                                    <strong className="search-results__price">${categories.price}</strong>
                                </div>
                            </div>
                        ):
                        <Loader/>
                    }
                </div>
                </Container>
            </section>
        </div>
    );
};

export default Category;