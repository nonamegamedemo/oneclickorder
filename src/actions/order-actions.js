const SAVE_ORDER = 'saveOrder';
const SELECT_FLIGHT = 'selectFlight';

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