const SAVE_ORDER = 'saveOrder';

export function saveOrder(order) {
    return {
        type: SAVE_ORDER,
        order
    }
}