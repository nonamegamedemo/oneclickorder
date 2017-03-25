const SAVE_ORDER               = 'saveOrder';
const CREATE_ORDER             = 'createOrder';
const SELECT_FLIGHT            = 'selectFlight';
const SELECT_HOTEL             = "selectHotel";
const SWITCH_ORDER_RELAX_STATE = 'switchOrderRelaxState';
const CHANGE_FLIGHT            = 'changeFlight';

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

export function changeFlight(flightInfo) {
    return {
        type: CHANGE_FLIGHT,
        flightInfo
    };
}

export function createOrder(tour, startDate) {
    return {
        type: CREATE_ORDER,
        tour,
        startDate
    }
}