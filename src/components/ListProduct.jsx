import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllProductsAction} from './../store/actions/productActions'
import ProductCart from './ProductCart.jsx'
import './scss/ListProduct.scss'

const ListProduct = () =>{

    const useState = useSelector( (state) => (state.products))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProductsAction())
        console.log("dispatched action get all")
    },[dispatch])
    return (
        
        <>
        {useState.data.data && useState.data.data.length && (
        <div class="container d-flex flex-wrap list-product">
        {useState.data.data.map((item) => (
                <ProductCart key={item.img} product={item}></ProductCart>
            ))}
        </div>
        )}
        </>
    )
};
export default ListProduct;