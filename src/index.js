import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


/** TODO: Add REDUCERS */
const feelingReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return action.payload;
        default:
            return state;
    }
};


const storeInstance = createStore(
    combineReducers({
        //Reducers go here
        feelingReducer
    }),
    applyMiddleware(
        logger
    )
);

ReactDOM.render(
<React.StrictMode>
    <Provider store={storeInstance}>
        <App />
    </Provider>
</React.StrictMode>,

document.getElementById('root')
);


registerServiceWorker();
