const SAVE_ORDER = 'saveOrder';

export function createOrder(order) {
    return {
        type: SAVE_ORDER,
        order
    }
}