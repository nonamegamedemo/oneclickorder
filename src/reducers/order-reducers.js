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

export function createOrderReducer(state = {}, action) {
    return state;
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