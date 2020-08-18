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
        case Types.GET_USER_BY_ID: {
            state = action.user;
            return [state]
        }
        case Types.UPDATE_USER: {
            state = action.user;
            return [state]
        }
        default: return [...state];
    }
}

export default users