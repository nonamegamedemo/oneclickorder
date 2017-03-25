import {createOrder} from './order-reducer-create';

export function ordersReducer(state = [], action) {
    switch(action.type){
        case 'saveOrder':
            state = saveOrder(state, action);
        case 'selectFlight':
            console.log(action);
    }
    return state;
}

export function orderMapReducer(state = {}, action) {
    return state;
}

export function createOrderReducer(state = null, action) {
    switch(action.type) {
        case 'createOrder':
            state = createOrder(state, action);
            break;
        case 'saveOrder':
            state = null;
            break;
        case 'switchOrderRelaxState':
            state = switchOrderRelaxState(state, action);
            break;
    }
    return state;
}

function switchOrderRelaxState(state, action) {
    let newState = Object.assign({}, state);
    newState.isRelax = action.isRelax;
    
    return newState;
}

function saveOrder(state, action) {
    let newState = state.slice();
    newState.push(action.order);
    return newState;
}

// function getFlight(state, action) {
//     let newState = Object.assign({}, state, action.flight);
//     console.log(newState);
//     return newState;
// }