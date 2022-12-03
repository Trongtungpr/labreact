import React from 'react';

const ItemCart = (props) => {

    return (
        <>
            <div class="row">
              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                {/* <!-- Image --> */}
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={props.product.img}
                    class="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div class="mask"></div>
                  </a>
                </div>
                {/* <!-- Image --> */}
              </div>

              <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Data --> */}
                <p><strong>{props.product.name}</strong></p>
                <p>Color: blue</p>
                <p>Size: M</p>
                <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i class="fas fa-trash"></i>
                </button>
                <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i class="fas fa-heart"></i>
                </button>
                {/* <!-- Data --> */}
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Quantity --> */}
                <div class="d-flex mb-4">
                  <button class="btn btn-primary px-3 me-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="fas fa-minus"></i>
                  </button>

                  <div class="form-outline">
                    <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                    <label class="form-label" for="form1">Quantity</label>
                  </div>

                  <button class="btn btn-primary px-3 ms-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                {/* <!-- Quantity --> */}

                {/* <!-- Price --> */}
                <p class="text-start text-md-center">
                  <strong>${props.product.price}</strong>
                </p>
                {/* <!-- Price --> */}
              </div>
            </div>
        </>
    )
};

export default ItemCart;