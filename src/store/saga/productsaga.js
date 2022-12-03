import {getAll, getProduct} from './../../api/productApi';
import * as actions from './../actions/productActions';
import {call,takeEvery,put} from 'redux-saga/effects'
import { GET_ALL_PRODUCT, GET_VIEW_DETAIL_PRODUCT } from '../constants/actionType';

function* getAllProduct(action) {
    try {
      const response = yield call(getAll); 
      yield put(actions.getAllProductSuccessAction(response));
    } catch (e) {
      console.log(e)
      yield put(actions.getAllProductFailureAction(e.response.data));
    }
}
  function* getViewDetailProducts(action) {
    console.log("actiong payload view detail", action.payload)
    try {
      const response = yield getProduct(action.payload.id);
      console.log("view productdetail",response);
      if(response){
        yield put(actions.getViewDetailProductSuccessAction(response.data));
      }
    } catch (e) {
      yield put(actions.getAllProductFailureAction(e.response.data));
    }
}
export function* productSaga() {
    yield takeEvery(GET_ALL_PRODUCT,getAllProduct);
    yield takeEvery(GET_VIEW_DETAIL_PRODUCT, getViewDetailProducts);
}


