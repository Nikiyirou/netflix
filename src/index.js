import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from "redux";
import MyListReducer from "./myListReducer";
import RecommendationsReducer from "./recommendationsReducer";

const rootReducer = combineReducers({
    Mylistred: MyListReducer,
    Recommendationred: RecommendationsReducer
});

const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
