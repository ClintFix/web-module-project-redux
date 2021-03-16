import React from 'react';
import ReactDOM from 'react-dom';

//* STEP 3: Import needed things
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers'

import  App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

//* STEP 4: create store
const store = createStore(reducer);

const rootElement = document.getElementById('root');
//* STEP 5: Wrap App in Provider. React Router would be inside Provider
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, rootElement);
