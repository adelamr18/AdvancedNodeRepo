import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
window.axios = axios;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {},  composeEnhancers( applyMiddleware(reduxThunk)
));
ReactDOM.render(
    <Provider store={store}><App/></Provider>
    , document.querySelector('#root')); 

console.log('stripe key is' ,process.env.REACT_APP_STRIPE_KEY)
