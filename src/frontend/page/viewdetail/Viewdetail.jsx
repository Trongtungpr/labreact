import React, {useState, useEffect ,useCallback } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import ViewDetailProduct from "../../../components/Viewdetailproduct.jsx";
import {getViewDetailProductAction} from "../../../store/actions/productActions";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import { useParams } from 'react-router-dom';
import './Viewdetail.scss'
import { API_GET_PRODUCT } from "../../../api/contantApis.js";
import { getProduct } from "../../../api/productApi.js";

const ViewDetail = () => {
    const [itemData, setItemData] = useState(Object);
    const dispatch = useDispatch()
    const param = useParams()

    console.log("itemdata",itemData)
    const FetProduct = useCallback(() => {
        console.log(param.productslug)
        getProduct(param.productslug)
            .then(res =>
                setItemData(res)
            )
    }, [param])
    useEffect(()=>{
        FetProduct()
    },[])
    return (  
        <>
            <header>
                <Header/>
            </header>
            <main>
            <div className="container">
                {itemData.data && itemData.data.length &&(
                    <ViewDetailProduct product={itemData.data}/>
                    )}
            </div>
            </main>
            <Footer/>
        </>
    );
}

export default ViewDetail ;