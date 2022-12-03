import { 
    GET_ALL_PRODUCT,
    GET_ALL_PRODUCT_SUCCESS,
    GET_ALL_PRODUCT_FAILURE,
    GET_VIEW_DETAIL_PRODUCT,
    GET_VIEW_DETAIL_PRODUCT_SUCCESS,
    GET_VIEW_DETAIL_PRODUCT_FAILURE,
} from "../constants/actionType";
// =========================================PRODUCT==========================================//

export const getAllProductsAction = (payload) => ({
    type : GET_ALL_PRODUCT,
    payload,
});
export const getAllProductSuccessAction = (payload) => ({
    type : GET_ALL_PRODUCT_SUCCESS,
    payload,
});
export const getAllProductFailureAction = (payload) => ({
    type :GET_ALL_PRODUCT_FAILURE,
    payload,
});

// =========================================VIEW PRODUCT==========================================//
export const getViewDetailProductAction = (payload) =>({
    type : GET_VIEW_DETAIL_PRODUCT,
    payload,
});
export const getViewDetailProductSuccessAction = (payload) =>({
    type : GET_VIEW_DETAIL_PRODUCT_SUCCESS,
    payload,
})
export const getViewDetailProductfalureAction = (payload) =>({
    type : GET_VIEW_DETAIL_PRODUCT_FAILURE,
    payload,
})