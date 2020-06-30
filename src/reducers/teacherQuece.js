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
        default: return [...state];
    }
}

export default teacherQuece;