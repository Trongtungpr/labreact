import React, { useCallback,useEffect ,useState} from "react";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAll } from "../../../api/productApi";
import ItemCart from "../../../components/cart/ItemCart";
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

const Cart = () =>{
    const [itemData, setItemData] = useState(Object);
    const dispatch = useDispatch()
    const param = useParams()


    const FetProduct = useCallback(() => {
        getAll()
            .then(res =>    
                setItemData(res)
            )
    }, [param])

    useEffect(() => {
        FetProduct()
    },[dispatch])
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
            <div className="container">
                {itemData.data && itemData.data.length &&(
                    <ItemCart product={itemData.data}/>
                    )}
            </div>
            </main>
            <Footer/>
        </>
    )
};
export default Cart;