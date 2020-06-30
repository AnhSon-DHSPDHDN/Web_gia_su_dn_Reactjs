import * as Types from './../constants/ActionTypes';

let initialState = [];

const classesQuece = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_CLASS_TO_QUECE: {
            state.push(action.classquece)
            return [...state]
        }
        case Types.GET_ALL_CLASS_FROM_QUECE: {
            state = action.classquece;
            return [...state];
        }
        case Types.DELETE_CLASS_FROM_QUECE: {
            let index = state.findIndex(state => state.id === action.id)
            state.splice(index, 1);
            return [...state]
        }
        default: return [...state]
    }
}
export default classesQuece;