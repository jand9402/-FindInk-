import React, { lazy } from 'react'
import { HomeRedirect } from './RouteUtils'
import RouteController from './RouteController'
const Dashboard = lazy(() => import('../components/views/Dashboard'))
const Login = lazy(() => import('../components/views/Login'))
const Register = lazy(() => import('../components/views/Register'))
const Home = lazy(() => import('../components/views/Home'))
const Profile = lazy(() => import('../components/views/Profile'))
const Contacto = lazy(() => import('../components/views/Contacto'))
const Edit = lazy(() => import('../components/views/Edit'))

const routes = [
    {
        path: "/",
        exact: true,
        component: HomeRedirect
    },
    {
        path: "/login",
        exact: true,
        render: props => <Login {...props} />
    },
    {
        path: "/register",
        exact: true,
        render: props => <Register {...props} />
    },
    {
        path: "/app",
        render: props => <RouteController component={Home} {...props} />,
        routes: [
            {
                path: "/app",
                exact: true,
                render: props => <RouteController component={Dashboard} {...props} />
            }
        ]
    }, 
    {
        path: "/profile/:id",
        render: props => <Profile {...props} />,
    },
    {
        path: "/edit/:id",
        render: props => <Edit {...props} />,
    },
    {
        path: "/contacto/:id",
        render: props => <Contacto {...props} />,
    },
]

export default routes