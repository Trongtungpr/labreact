import * as actions from './../constants/actionType'
// import getProducts from './../../api/productApi'

const initiaState = {
    data : [],
    isLoading : false,
}

const productReducer = (state = initiaState,action) =>{
    switch(action.type){
        case actions.GET_ALL_PRODUCT :
            return {
                ...state,
                isLoading: true,
            }
        case actions.GET_ALL_PRODUCT_SUCCESS :
          return {
            ...state,
            isLoading:false,
            data : action.payload,
        }
        case actions.GET_ALL_PRODUCT_FAILURE : 
          return {
            ...state,
            isLoading:false,
            data : action.payload,
          }
        case actions.GET_VIEW_DETAIL_PRODUCT :
          return {
            ...state,
            isLoading:false,
          }
        case actions.GET_VIEW_DETAIL_PRODUCT_SUCCESS :
          console.log("productReducer get view detail sucess product is running")
          return {
            ...state,
            isLoading:false,
            data : action.payload,
          }
        case actions.GET_VIEW_DETAIL_PRODUCT_FAILURE :
          return {
            ...state,
            isLoading:false,
            data : action.payload,
          }
        default:
          console.log("default running")
            return {
                ...state,
            }
    }
}
export default productReducer;