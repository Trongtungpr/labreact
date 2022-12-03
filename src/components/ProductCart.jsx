import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../routers/contantroutes';
import './scss/ProductCart.scss'

const ProductCard = (props) =>{
    const navigate = useNavigate()
    const handleViewDetail = () => {
        navigate(ROUTES.detailview+"/"+props.product.id)
    }
    return (
        <div class="col-3 my-5 px-2">
            <div className="cart-item">
                <img class='mx-auto img-thumbnail'
                    src={props.product.img}
                    width="auto" height="auto" alt="nice" />
                <div class="card-body text-center mx-auto">
                    <div class='cvp'>
                        <h5 class="card-title font-weight-bold pt-2">{props.product.name}</h5>
                        <p class="card-text">${props.product.price}</p>
                        <div className="btn d-block" onClick={handleViewDetail}>
                            <a class="btn details px-auto">view details</a>
                        </div>
                        <div className="btn"><a class="btn cart px-auto">Add to cart</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard