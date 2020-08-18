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
// Edit lớp học
export const editClassAdmin = (aclass) => {
    return {
        type: Types.UPDATE_CLASS,
        class: aclass
    }
}
export const editClassAdminRequest = (aclass, id) => {
    return dispatch => {
        return callAPI(`classes/${id}`, 'PUT', aclass).then(res => {
            return dispatch(editClassAdmin(res.data))
        })
    }
}
// Delete lớp học
export const deleteClassAdmin = (id) => {
    return {
        type: Types.DELETE_CLASS,
        id: id
    }
}
export const deleteClassAdminRequest = (id) => {
    return dispatch => {
        return callAPI(`classes/${id}`, 'DELETE', null).then(() => {
            return dispatch(deleteClassAdmin(id))
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
// Get User by ID
export const actGetUserByID = (user) => {
    return {
        type: Types.GET_USER_BY_ID,
        user: user
    }
}
export const actGetUserByIDRequest = (id) => {
    return dispatch => {
        callAPI(`users/${id}`, 'GET', null).then(res => {
            dispatch(actGetUserByID(res.data))
        })
    }
}
// Edit User
export const actEditUser = (user) => {
    return {
        type: Types.UPDATE_USER,
        user: user
    }
}
export const actEditUserRequest = (user, id) => {
    return dispatch => {
        return callAPI(`users/${id}`, 'PUT', user).then(res => {
            dispatch(actEditUser(res.data))
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
            return dispatch(actFetchNewClassQuece(res.data))
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
            return dispatch(actFetchNewTeacherToQuece(res.data))
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
export const actGetTeacherQueceByID = (teacher) => {
    return {
        type: Types.GET_TEACHER_QUECE_BY_ID,
        teacherQuece: teacher
    }
}
export const actGetTeacherQueceByIDRequest = (id) => {
    return dispatch => {
        return callAPI(`teachersquece/${id}`, 'GET', null).then(res => {
            dispatch(actGetTeacherQueceByID(res.data))
        })
    }
}
// Edit teacher quece
export const actEditTeacherQuece = (teacher) => {
    return {
        type: Types.EDIT_TEACHER_QUECE,
        teacherQuece: teacher
    }
}
export const actEditTeacherQueceRequest = (teacher, id) => {
    return dispatch => {
        return callAPI(`teachersquece/${id}`, 'PUT', teacher).then(res => {
            dispatch(actEditTeacherQuece(res.data))
        })
    }
}
// Delete teacher quece
export const actDeleteTeacherQuece = (id) => {
    return {
        type: Types.DELETE_TEACHER_QUECE,
        id: id
    }
}
export const actDeleteTeacherQueceRequest = (id) => {
    return dispatch => {
        return callAPI(`teachersquece/${id}`, 'DELETE', null).then(() => {
            return dispatch(actDeleteTeacherQuece(id))
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
            return dispatch(actGetAllTeacher(res.data))
        })
    }
}
// Add Gia Sư
export const actAddTeacher = (teacher) => {
    return {
        type: Types.ADD_TEACHER,
        teachers: teacher
    }
}
export const actAddTeacherRequest = (teacher) => {
    return dispatch => {
        return callAPI('teachers', 'POST', teacher).then(res => {
            return dispatch(actAddTeacher(res.data))
        })
    }
}
// Delete Teacher
export const actDeleteTeacher = (id) => {
    return {
        type: Types.DELETE_TEACHER,
        id: id
    }
}
export const actDeleteTeacherRequest = (id) => {
    return dispatch => {
        return callAPI(`teachers/${id}`, 'DELETE', null).then(() => {
            return dispatch(actDeleteTeacher(id))
        })
    }
}
// Get Teacher By ID 
export const actGetTeacherByID = (teacher) => {
    return {
        type: Types.GET_TEACHER_BY_ID,
        teachers: teacher
    }
}
export const actGetTeacherByIDRequest = (id) => {
    return dispatch => {
        return callAPI(`teachers/${id}`, 'GET', null).then(res => {
            return dispatch(actGetTeacherByID(res.data))
        })
    }
}
// Edit Teacher
export const actEditTeacher = teacher => {
    return {
        type: Types.EDIT_TEACHER,
        teachers: teacher
    }
}
export const actEditTeacherRequest = (teacher, id) => {
    return dispatch => {
        return callAPI(`teachers/${id}`, 'PUT', teacher).then(res => {
            return dispatch(actEditTeacher(res.data))
        })
    }
}