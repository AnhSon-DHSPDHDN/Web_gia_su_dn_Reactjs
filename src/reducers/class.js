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
        case Types.DELETE_CLASS: {
            let id = action.id;
            let index = state.findIndex(clas => clas.id === id);
            if (index !== undefined) {
                state.splice(index, 1);
            }
            return [...state]
        }
        case Types.UPDATE_CLASS: {
            state = action.class;
            return [state];
        }
        default: return [...state]
    }
}

export default classes;