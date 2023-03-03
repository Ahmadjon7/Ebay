import React from 'react';
import Intro from '../../components/Intro/Intro';
import Category from '../../components/Category/Category';
import Categories from '../../components/categories/Categories';
import CategoriesId from '../../components/categoriesId/categoriesId';
import Ebay from '../../components/ebay/Ebay';
import CategoryFooter from '../../components/CategoryFooter/Category';
const Home = () => {
    return (
        <>
            <main>
                <Intro/>
                <Category/>
                <CategoriesId/>
                <Categories/>
                <Ebay/>
                <CategoryFooter/>
            </main>
        </>
    );
};

export default Home;