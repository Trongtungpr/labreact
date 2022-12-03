import { call, put, takeEvery } from "redux-saga/effects";
import { getUser } from "../../api/userApi";
import { AT_LOGIN_USER, AT_LOGOUT_USER } from "../constants/actionType";
import * as actions from './../actions/userAction'

function* getUserLogin(action) {
    console.log("actiong payload email password", action.payload)
    try {
      const response = yield call(getUser,action.payload);
      console.log("user login detail",response);
      if(response){
        yield put(actions.atLoginUserSuccessAction(response.data));
      }
    } catch (e) {
      yield put(actions.atLoginUserFailureAction(e));
    }
}
export function* userSaga() {
    yield takeEvery(AT_LOGIN_USER,getUserLogin);
}