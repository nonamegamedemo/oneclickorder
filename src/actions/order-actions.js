const SAVE_ORDER = 'saveOrder';
const SELECT_FLIGHT = 'selectFlight';
const SELECT_HOTEL = "selectHotel";

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