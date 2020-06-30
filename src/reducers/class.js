import * as Types from './../constants/ActionTypes';

let initialState = [];

const classes = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_CLASSES: {
            state = action.classes;
            return [...state];
        }
        case Types.GET_CLASS_BY_ID: {
            state = action.class
            return state
        }
        case Types.ADD_CLASS: {
            state.push(action.classes);
            return [...state]
        }
        default: return [...state]
    }
}

export default classes;