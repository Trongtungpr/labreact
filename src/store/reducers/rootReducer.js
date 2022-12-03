import userReducer from './userReducer';
import productReducer from './productReducer'

const { combineReducers } = require('redux');
const rootReducer = combineReducers ({
   user : userReducer,
   products : productReducer,
});

export default rootReducer;