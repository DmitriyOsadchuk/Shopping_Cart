import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "/reducers/cartReducer";
// import { orderReducer } from "/reducers/orderReducer";
import { reducer as formReducer } from 'redux-form';


// const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        cart: cartReducer,
        form: formReducer
        // order: orderReducer,

    }),
    // initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store ;