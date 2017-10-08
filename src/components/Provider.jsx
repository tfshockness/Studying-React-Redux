import React from 'react';
import { Provider } from 'react-redux'; //First step for connect react with redux
import store from '../redux/store';
import App from '../App';


//second step wrap the Application in the provider component
//tird step set up the store in the provider component
const provider = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

console.log(store.getState());

export default provider;

