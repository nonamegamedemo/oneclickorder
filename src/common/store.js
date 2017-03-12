import {createStore, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {ordersReducer, orderMapReducer, toursReducer, tourMapReducer, recommendToursReducer} from '../reducers';

import {combineReducers} from 'redux';

const reducers = combineReducers({
    orders: ordersReducer,
    orderMap: orderMapReducer,
    recommendTours: recommendToursReducer,
    tours: toursReducer,
    tourMap: tourMapReducer
});

const store = createStore(reducers);
// const store = createStore(reducers, undefined, compose(autoRehydrate));

// persistStore(store);

export default store;