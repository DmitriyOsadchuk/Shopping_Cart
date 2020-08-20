import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);

        window.localStorage.setItem("app_state", serialisedState);
    } catch (err) {
        // Log errors here, or ignore
    }
};

const loadState = () => {
    try {
        const serialisedState = window.localStorage.getItem("app_state");
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

const oldState = loadState();
const store = createStore(cartReducer, oldState);
store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

