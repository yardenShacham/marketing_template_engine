export const getNewIdState = (state, id, propName, newValue) =>
    Object.assign({}, state[propName], {
        [id]: newValue
    });