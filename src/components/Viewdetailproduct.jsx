import React, {useState,useEffect} from "react";
import './scss/Viewdetailproduct.scss'


const ViewDetailProduct = (props) => {
  console.log(props.product)
  const [stateViewDetailProduct,setStateViewDetailProduct] = useState(props.product[0])



  return (
    <>
      <div class="wrapper">
        <div className="d-flex">
          <div class="product-img col-6">
            <img class='content-img' src={stateViewDetailProduct.img} />
          </div>
          <div class="product-info col-6">
            <div class="product-text">
              <h1>{stateViewDetailProduct.name}</h1>
              <p>
                Harvest Vases are a reinterpretation of peeled fruits and
                vegetables as functional objects. The surfaces appear to be sliced
                and pulled aside,allowing room for growth.{" "}
              </p>
            </div>
            <div class="product-price-btn">
              <p>
                <span>{stateViewDetailProduct.price}</span>$
              </p>
              { props.type != true &&
              (<button class="button-buy" type="button">buy now</button>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewDetailProduct;
