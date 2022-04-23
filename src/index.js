import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function reducer(state = 0, action) {
    switch (action.type) {
        case 'inc':
            return state + action.payload;
        case 'dec':
            return state - action.payload;
        case 'res':
            return state = action.payload;
        default:
            return state;
    }
}

    let store = createStore(reducer);
console.log(store.getState());

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)



