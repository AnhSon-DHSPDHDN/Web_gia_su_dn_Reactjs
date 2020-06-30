import { combineReducers } from 'redux';
import users from './users.js'
import classes from './class'
import classesquece from './classesquece'
import teacherQuece from './teacherQuece';
import teachers from './teacher';

const appReducers = combineReducers({
    users,
    classes,
    classesquece,
    teacherQuece,
    teachers
});

export default appReducers;