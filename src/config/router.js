import React from "react";

const routers = [
    {
        path: '/',
        exact: true,
        component: React.lazy(() => import('../components/Home/Home'))
    },
    {
        path: '/about',
        exact: true,
        component: React.lazy(() => import('../components/About/About'))
    },
    {
        path: '/contact',
        exact: true,
        component: React.lazy(() => import('../components/Contact/Contact'))
    },
    {
        path: '/registerteacher',
        exact: true,
        component: React.lazy(() => import('../components/RegisterTeacher/RegisterTeacher'))
    },
    {
        path: '/seachteacher',
        exact: true,
        component: React.lazy(() => import('../components/SeachTeacher/SeachTeacher'))
    },
    {
        path: '/login',
        exact: true,
        component: React.lazy(() => import('../components/Login/LoginPage'))
    },
    {
        path: '/register',
        exact: true,
        component: React.lazy(() => import('../components/Login/RegisterPage'))
    },
    {
        path: '/detail/:id',
        exact: true,
        component: React.lazy(() => import('../components/DetailClass/DetailClass'))
    },
    {
        path: '/admin',
        exact: true,
        component: React.lazy(() => import('../components/Admin/Admin'))
    },
    {
        path: '/admin/class-quece',
        exact: true,
        component: React.lazy(() => import('../components/Admin/ClassQuece/ClassQuece'))
    },
    {
        path: '/admin/classes',
        exact: true,
        component: React.lazy(() => import('../components/Admin/Student/ClassesAdmin'))
    },
    {
        path: '/admin/classes/edit/:id',
        exact: true,
        component: React.lazy(() => import('../components/Admin/Student/ClassAdminEdit'))
    },
    {
        path: '/admin/classes/add',
        exact: true,
        component: React.lazy(() => import('../components/Admin/Student/ClassAdminAdd'))
    },
    {
        path: '/admin/users',
        exact: true,
        component: React.lazy(() => import('../components/Admin/Users/UserAdmin'))
    },
    {
        path: '/admin/teacher',
        exact: true,
        component: React.lazy(() => import('../components/Admin/Teacher/TeacherAdmin'))
    },
    {
        path: '/admin/teacher/edit/:id',
        exact: true,
        component: React.lazy(() => import('../components/Admin/Teacher/EditTeacherAdmin'))
    },
    {
        path: '/admin/teacher/add',
        exact: true,
        component: React.lazy(() => import('../components/Admin/Teacher/AddTeacherAdmin'))
    },
    {
        path: '/teacher/:id',
        exact: true,
        component: React.lazy(() => import('../components/DetailTeacher'))
    },
    {
        path: '/admin/teacher-quece',
        exact: true,
        component: React.lazy(() => import('../components/Admin/TeacherQuece/TeacherQueceAdmin'))
    },
    {
        path: '/admin/teacher-quece/edit/:id',
        exact: true,
        component: React.lazy(() => import('../components/Admin/TeacherQuece/TeacherQueceAdminEdit'))
    },
    {
        path: '/admin/users/edit/:id',
        exact: true,
        component: React.lazy(() => import('../components/Admin/Users/EditUserAdmin'))
    }
];
export default routers;