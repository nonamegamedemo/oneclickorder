import {createStore, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {ordersReducer, orderMapReducer, createOrderReducer, toursReducer, tourMapReducer, recommendToursReducer} from '../reducers';

import {combineReducers} from 'redux';

const reducers = combineReducers({
    orders: ordersReducer,
    orderMap: orderMapReducer,
    createOrder: createOrderReducer,
    recommendTours: recommendToursReducer,
    tours: toursReducer,
    tourMap: tourMapReducer
});

const store = createStore(reducers, undefined, compose(autoRehydrate()));

persistStore(store);

export default store;