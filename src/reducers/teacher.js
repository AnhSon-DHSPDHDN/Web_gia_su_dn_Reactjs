import * as Types from '../constants/ActionTypes';

let initialState = [];

const teachers = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_TEACHER: {
            state = action.teachers;
            return [...state];
        }
        case Types.ADD_TEACHER: {
            state.push(action.teachers);
            return [...state]
        }
        case Types.DELETE_TEACHER: {
            let id = action.id;
            let index = state.findIndex(teacher => teacher.id === id);
            if (index !== undefined) {
                state.splice(index, 1);
            }
            return [...state];
        }
        case Types.GET_TEACHER_BY_ID: {
            state = action.teachers;
            return state;
        }
        case Types.EDIT_TEACHER: {
            state = action.teachers;
            return [state];
        }
        default: return [state];
    }
}

export default teachers;