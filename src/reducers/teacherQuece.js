import * as Types from './../constants/ActionTypes';

let initialState = [];

const teacherQuece = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TEACHER_TO_QUECE: {
            state.push(action.teacherQuece);
            return [...state];
        }
        case Types.GET_ALLTEACHER_FROM_QUECE: {
            state = action.teacherQuece;
            return [...state];
        }
        case Types.GET_TEACHER_QUECE_BY_ID: {
            state = action.teacherQuece;
            return state;
        }
        case Types.EDIT_TEACHER_QUECE: {
            state = action.teacherQuece;
            return [state]
        }
        case Types.DELETE_TEACHER_QUECE: {
            let id = action.id;
            let index = state.findIndex(teacher => teacher.id === id);
            if (index !== undefined) {
                state.splice(index, 1);
            }
            return [...state];
        }
        default: return [...state];
    }
}

export default teacherQuece;