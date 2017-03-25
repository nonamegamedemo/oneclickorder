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
        case 'changeFlight':
            state = changeFlight(state, action);
            break;
        case 'selectFlight':
            state = selectFlight(state, action);
            break;
    }
    return state;
}

function switchOrderRelaxState(state, action) {
    let newState = Object.assign({}, state);
    newState.isRelax = action.isRelax;
    
    return newState;
}

function selectFlight(state, action) {
    let order = Object.assign({}, state);
    let newFlight = Object.assign({}, action.flight);
    let flights = order.flight;

    let sourceIdx = flights.indexOf(order.changeSource);

    newFlight.type = 'flight';
    if (sourceIdx >= 0) {
        flights.splice(sourceIdx, 1, newFlight);
    }

    order.flight = flights;
    order.changeSource = null;
    return order;
}

function changeFlight(state, action) {
    let newState = Object.assign({}, state, {changeSource: action.flightInfo});
    return newState;
}

function saveOrder(state, action) {
    let newState = state.slice();
    delete action.order['changeSource'];
    newState.push(action.order);
    return newState;
}