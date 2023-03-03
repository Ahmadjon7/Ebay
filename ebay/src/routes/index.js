import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Home from './home/Home';
import Category from './category/Category'
import Product from './prodcut/SingleProduct';
import Search from './search/Search';
import Auth from './auth/Auth';
import Cart from './addCart/Cart';


const index = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path="/auth">
                <Auth/>
            </Route>
            <Route path="/addCart">
                <Cart/>
            </Route>
            <Route path="/category/:id">
                <Category/>
            </Route>
            <Route path="/product/:id">
                <Product/>
            </Route>
            <Route path="/search/:productName">
                <Search/>
            </Route>
        </Switch>
    );
};

export default index;