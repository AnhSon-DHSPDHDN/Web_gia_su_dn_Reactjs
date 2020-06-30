import * as Types from '../constants/ActionTypes';

let initialState = [];

const teachers = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_TEACHER: {
            state = action.teachers;
            return [...state];
        }
        default: return [...state];
    }
}

export default teachers;