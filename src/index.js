import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  rootReducer from "./redux/rootReducer";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk";

let store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

