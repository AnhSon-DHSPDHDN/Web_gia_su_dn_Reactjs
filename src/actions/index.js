import * as Types from '../constants/ActionTypes'
import callAPI from '../utils/callapi'


// --------------------------------------------------------CLASS
/* Lấy tất cả DS lớp học (Danh sách đăng ký học) */
export const actFetchAllClasses = (classes) => {
    return {
        type: Types.FETCH_CLASSES,
        classes: classes
    }
}

export const actFetchAllClassesAPI = () => {
    return dispatch => {
        return callAPI('classes', 'GET', null).then(res => {
            dispatch(actFetchAllClasses(res.data))
        })
    }
}
/** Thêm lớp học */
export const actAddClass = (classes) => {
    return {
        type: Types.ADD_CLASS,
        classes: classes
    }
}
export const actAddClassRequest = (classes) => {
    return dispatch => {
        return callAPI('classes', 'POST', classes).then(res => {
            dispatch(actAddClass(res.data))
        })
    }
}

/* Lấy lớp học theo ID */
export const getClassByID = (aclass) => {
    return {
        type: Types.GET_CLASS_BY_ID,
        class: aclass
    }
}

export const getClassByIDAPI = (id) => {
    return dispatch => {
        return callAPI(`classes/${id}`, 'GET', null).then(res => {
            dispatch(getClassByID(res.data))
        })
    }
}


//----------------------------------------------------------- User
/** Lấy All danh sách user */
export const actFetchUsers = (users) => {
    return {
        type: Types.FETCH_USERS,
        users: users
    }
}

export const actFetchUsersRequest = () => {
    return (dispatch) => {
        return callAPI('users', 'GET', null).then(res => {
            dispatch(actFetchUsers(res.data))
        })
    }
}

/** Đăng ký user */
export const actFetchNewUser = (user) => {
    return {
        type: Types.ADD_USER,
        user: user
    }
}

export const actFetchNewUserRequest = (user) => {
    return dispatch => {
        return callAPI('users', 'POST', user).then(res => {
            dispatch(actFetchNewUser(res.data))
        });
    }
}
/** Xóa User */
export const actDeleteUser = (id) => {
    return {
        type: Types.DELETE_USER,
        id: id
    }
}
export const actDeleteUserRequest = (id) => {
    return dispatch => {
        return callAPI(`users/${id}`, 'DELETE', null).then(() => {
            dispatch(actDeleteUser(id))
        });
    }
}

//----------------------------------------------------------------- ClassQuece
/** Đăng ký lớp học chờ phê duyệt */
export const actFetchNewClassQuece = (classquece) => {
    return {
        type: Types.ADD_CLASS_TO_QUECE,
        classquece: classquece
    }
}

export const actFetchNewClassQueceRequest = (classquece) => {
    return dispatch => {
        return callAPI('classesquece', 'POST', classquece).then(res => {
            dispatch(actFetchNewClassQuece(res.data))
        })
    }
}

/** Lấy danh sách lớp học trong hàng đợi */
export const actGetAllClassFromQuece = (classquece) => {
    return {
        type: Types.GET_ALL_CLASS_FROM_QUECE,
        classquece: classquece
    }
}

export const actGetAllClassFromQueceRequest = () => {
    return dispatch => {
        return callAPI('classesquece', 'GET', null).then(res => {
            dispatch(actGetAllClassFromQuece(res.data))
        })
    }
}
/** Xóa lớp học trong hàng đợi */
export const actDeleteClassFromQuece = (id) => {
    return {
        type: Types.DELETE_CLASS_FROM_QUECE,
        id: id
    }
}
export const actDeleteClassFromQueceRequest = (id) => {
    return dispatch => {
        return callAPI(`classesquece/${id}`, 'DELETE', null).then(() => {
            dispatch(actDeleteClassFromQuece(id))
        })
    }
}

//--------------------------------------------------- TeacherQuece
/** Đăng ký gia sư chờ phê duyệt */
export const actFetchNewTeacherToQuece = (teacher) => {
    return {
        type: Types.ADD_TEACHER_TO_QUECE,
        teacherQuece: teacher
    }
}

export const actAddNewTeacherToQuece = (teacher) => {
    return dispatch => {
        return callAPI('teachersquece', 'POST', teacher).then(res => {
            dispatch(actFetchNewTeacherToQuece(res.data))
        })
    }
}
/** Lấy DS Giasu trong hàng đợi */
export const actGetAllTeacherQuece = (teacher) => {
    return {
        type: Types.GET_ALLTEACHER_FROM_QUECE,
        teacherQuece: teacher
    }
}
export const actGetAllTeacherQueceRequest = () => {
    return dispatch => {
        return callAPI('teachersquece', 'GET', null).then(res => {
            dispatch(actGetAllTeacherQuece(res.data))
        })
    }
}


//------------------------------------------------------------------TEACHER
/** Lấy All ds GIA SƯ */
export const actGetAllTeacher = (teacher) => {
    return {
        type: Types.GET_ALL_TEACHER,
        teachers: teacher
    }
}
export const actGetAllTeacherRequest = () => {
    return dispatch => {
        return callAPI('teachers', 'GET', null).then(res => {
            dispatch(actGetAllTeacher(res.data))
        })
    }
}