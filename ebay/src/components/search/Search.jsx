import React , { useState }from 'react';
import { BsSearch } from 'react-icons/bs'
import { RxCaretDown } from 'react-icons/rx'
import '../Header/Header.scss'
import instance from './../../api/instance';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import './Serach.scss'
import useFetchData from './../../hooks/useFetchData';


const Search = () => {

    const [searchResult, setSearchResult] = useState([])
    const [searchValue ,  setSearchValue] = useState([])

    const giveSearchSuggestions = (e) =>{
        setSearchValue(e.target.value);

        instance.get(`/products/?title=${e.target.value}&offset=10&limit=10`)
        .then(reseponse => setSearchResult(reseponse.data))
        .catch(err => console.log(err))
    }

    const giveMoreResult = (e) =>{
        e.preventDefault();
        window.location.pathname = `/search/${searchValue}`
    }
    const [data,] = useFetchData("/categories?offset=0&limit=5");


    return (
        <>
            <form className='header-navbar__form' onSubmit={giveMoreResult}>
                <div className='header-navbar--select'>
                    <button className='header-navbar__form--btn'>
                        Shop by category
                    </button>
                    <RxCaretDown />
                </div>
                <div className='header-navbar__tabs'>
                    <BsSearch />
                    <input onChange={giveSearchSuggestions} type="text" placeholder='Search for anything' className='header-navbar__search' />
                    { searchResult?.length > 0 && searchValue ? <div className='search-suggestions'>
                                {searchResult.map(searchItem => 
                                    <Link to={`product/${searchItem.id}`} className='search-item__link' key={v4()}>
                                        <p>{searchItem.title}</p>
                                    </Link>
                                )}
                            </div>:<></>}
                    <hr />
                    <select className='header-navbar__tabs--select'>
                        <option value="">All Categories</option>
                        {
                           data.map(option =>
                                <option key={option.id}>{option.name}</option>
                              )
                        }
                    </select>
                </div>
                <button className='header-navbar__btn'>Search</button>
            </form>
        </>
    );
};

export default Search;