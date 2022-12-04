import * as actions from './../constants/actionType';

export const changePasswordRequestAction = (payload) => ({
    type : actions.AT_CHANGE_PASSWORD,
    payload,
})

export const loginUserRequestAction = (payload) => ({
    type : actions.AT_LOGIN_USER,
    payload,
})

export const registerUserRequestActions = (payload) => ({
    type : actions.AT_REGISTER_USER,
    payload,
})

export const atLoginUserAction = (payload) => ({
    type : actions.AT_LOGIN_USER,
    payload,
});

export const atLoginUserSuccessAction = (payload) => ({
    type : actions.AT_LOGIN_USER_SUCCESS,
    payload,
});

export const atLoginUserFailureAction = (payload) => ({
    type : actions.AT_LOGIN_USER_FAILURE,
    payload,
})

export const atLogoutUserAction = (payload) => ({
    type : actions.AT_LOGOUT_USER,
    payload,
})

export const getAllUserActions = (payload) => ({
    type : actions.GET_ALL_USER,
    payload
})

export const getAllUserSuccessActions = (payload) => ({
    type : actions.GET_ALL_USER_SUCCESS,
    payload
})

export const getAllUserFailureActions = (payload) => ({
    type : actions.GET_ALL_USER_FAILURE,
    payload
})