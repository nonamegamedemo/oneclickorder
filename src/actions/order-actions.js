const SAVE_ORDER               = 'saveOrder';
const CREATE_ORDER             = 'createOrder';
const SELECT_FLIGHT            = 'selectFlight';
const SELECT_HOTEL             = "selectHotel";
const SWITCH_ORDER_RELAX_STATE = 'switchOrderRelaxState';

export function saveOrder(order) {
    return {
        type: SAVE_ORDER,
        order
    }
}

export function selectFlight(flight) {
	return {
		type: SELECT_FLIGHT,
		flight
	}
}

export function selectHotel(hotel) {
	return {
		type: SELECT_HOTEL,
		hotel
	}
}

export function switchToRelaxOrder(isRelax) {
    return {
        type: SWITCH_ORDER_RELAX_STATE,
        isRelax
    };
}

export function createOrder(tour, startDate) {
    return {
        type: CREATE_ORDER,
        tour,
        startDate
    }
}