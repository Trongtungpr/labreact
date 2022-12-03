import rootReducer from './../store/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";

export const configStore = () =>{
    const sagaMiddleware = createSagaMiddleware();

    return { ...createStore(
        rootReducer, 
        applyMiddleware(sagaMiddleware)),
        runSaga : sagaMiddleware.run
    }
}

