export const getNewIdState = (state, id, propName, newValue) =>
    Object.assign({}, state[propName], {
        [id]: newValue
    });

export const getNewEditModeState = (state, id, propName, newValue) => {
    const newEditMode = Object.assign({}, state["isEditMode"][id], {
        [propName]: newValue
    });

    return getNewIdState(state, id, "isEditMode", newEditMode);
};