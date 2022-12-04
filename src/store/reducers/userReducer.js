import * as actions from './../constants/actionType';

const initiaState = {
    data : [],
    isLoading : false
};

const userReducer = (state=initiaState,action) => {
    switch(action.type){
        case actions.AT_LOGIN_USER:
            return {
                ...state,
                isLoading : true,
            };
        
        case actions.AT_LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoading : false,
                data : action.payload,
            };
            case actions.AT_LOGIN_USER_FAILURE:
                return {
                    ...state,
                    isLoading : false,
                    data : action.payload,
                };
            case actions.AT_LOGOUT_USER:
                return{
                    ...state,
                    isLoading :false,
                    data : [],
                }
            case actions.GET_ALL_USER :
                return {
                    ...state,
                    isLoading :true,
                }
            case actions.GET_ALL_USER_SUCCESS :
                return {
                    ...state,
                    isLoading :false,
                    data : action.payload,
                }
            case actions.GET_ALL_USER_FAILURE:
                return {
                    ...state,
                    isLoading :false,
                    data : action.payload,
                }
        default:
            return state;
    }
};
export default userReducer;