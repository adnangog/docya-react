import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

export default function configureStore() {

    const enhancers = [
        applyMiddleware(thunk)
    ];

    const store = createStore(rootReducer, compose(...enhancers));

    return store;
}