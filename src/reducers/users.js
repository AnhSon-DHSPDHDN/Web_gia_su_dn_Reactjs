import * as Types from '../constants/ActionTypes';

let initialState = [];

const users = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_USERS: {
            state = action.users;
            return [...state];
        }
        case Types.ADD_USER: {
            state.push(action.user);
            return [...state];
        }
        case Types.DELETE_USER: {
            let index = state.findIndex(user => user.id === action.id);
            state.splice(index, 1);
            return [...state];
        }
        default: return [...state];
    }
}

export default users