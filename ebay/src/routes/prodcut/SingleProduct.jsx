import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Container from '../../utils/Container';
import Loader from '../../components/loader/Loader';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './SingleProduct.scss'


const Product = () => {
    const dispatch = useDispatch();

    const dataId = useParams();

    const { cartProducts } = useSelector(state => state.cartReducer)

    const [data, isLoading] = useFetchData(`/products/${dataId.id}`)
    
    
    function addToCart(data){
        dispatch({data , type: "CART_PRODUCT"})
    }
    function removeFromCartProduct(data){
        dispatch({id:data.id , type : "REMOVE_FROM_CART_PRODUCT"})
    }

    return (
        <section className='single-product'>
            <Container>
                {!isLoading ?
                    <div className='single-product__wrapper'>
                        <div className='single-product--imageBox'>
                            {
                                data.images?.at(0) && data.images?.at(0).startsWith("https://") ?
                                    <img className='single-product__image' src={data.images?.at(0)} alt="single-product__image" />
                                    : <img className='single-product__image' src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F3f%2FPlaceholder_view_vector.svg%2F681px-Placeholder_view_vector.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3APlaceholder_view_vector.svg&tbnid=EXnrfE3lRCvyyM&vet=12ahUKEwjItsbJ3KT9AhVtCxAIHdU4DtEQMygEegUIARCfAQ..i&docid=rZF7WVKcxnVDIM&w=681&h=528&q=placeholder%20image&ved=2ahUKEwjItsbJ3KT9AhVtCxAIHdU4DtEQMygEegUIARCfAQ" alt="single-product__image" />
                            }
                        </div>
                        <div className='single-product--info'>
                            <h1>Title: <span>{data.title}</span></h1>
                            <p><b>Condition:</b><span>{data.description}</span></p>
                            <strong className='single-product__price'><b>Price:</b> <span>US ${data.price}</span></strong>
                            {cartProducts.find(p => p?.id === data?.id ) ? <button className='single-remove' onClick={() => removeFromCartProduct(data)}>Remove to cart</button> : <button className='single-btn' onClick={() => addToCart(data)}>Add to cart</button>}
                        </div>
                    </div> 
                    :
                    <Loader/>
                }
            </Container>


        </section>
    );
};

export default Product;