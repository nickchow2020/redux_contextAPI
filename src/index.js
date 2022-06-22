import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CounterContextProvider } from './context/counterContext';
import  {store} from "./redux/store"
import {Provider} from "react-redux"

ReactDOM.render(
    <CounterContextProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </CounterContextProvider>,
    document.getElementById("root")
);

