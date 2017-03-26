import {createOrder} from './order-reducer-create';

/**
 * 订单列表reducer
 *
 * @param  {Array}  state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
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

/**
 * 新订单的reducer
 *
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
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
        case 'changeHotel':
            state = changeHotel(state, action);
            break;
        case 'selectFlight':
            state = selectFlight(state, action);
            break;
        case 'selectHotel':
            state = selectHotel(state, action);
            break;
        case 'addPassenger':
            state = addPassenger(state, action);
            break;
        case 'removePassenger':
            state = removePassenger(state, action);
            break;
    }
    return state;
}

function removePassenger(state, action) {
    let idx = state.passengers.indexOf(action.passengerName);
    if (idx < 0) return state;

    let newState = Object.assign({}, state);
    let passengers = newState.passengers.slice();
    passengers.splice(idx, 1);
    newState.passengers = passengers;

    return newState;
}

function addPassenger(state, action) {
    let newState = Object.assign({}, state);
    let passengers = newState.passengers.slice();
    passengers.push(action.passengerName);
    newState.passengers = passengers;

    return newState;
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

function selectHotel(state, action) {
    let order = Object.assign({}, state);
    let hotel = action.hotel;
    let hotels = order.hotel;

    let sourceIdx = hotels.indexOf(order.changeSource);
    if (sourceIdx < 0) return state;

    let newHotel = Object.assign({}, hotels[sourceIdx]);
    newHotel.city = hotel.city;
    newHotel.hotel = hotel.hotel;
    newHotel.address = hotel.address;
    hotels.splice(sourceIdx, 1, newHotel);

    order.hotel = hotels;
    order.changeSource = null;
    return order;
}

function changeFlight(state, action) {
    let newState = Object.assign({}, state, {changeSource: action.flightInfo});
    return newState;
}

function changeHotel(state, action) {
    let newState = Object.assign({}, state, {changeSource: action.hotelInfo});
    return newState;
}

function saveOrder(state, action) {
    let newState = state.slice();
    delete action.order['changeSource'];
    newState.push(action.order);
    return newState;
}