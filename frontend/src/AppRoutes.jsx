import React from 'react'
import {createBrowserRouter} from 'react-router'
import Register from './feature/auth/pages/Register'
import Login from './feature/auth/pages/Login'


const AppRoutes = createBrowserRouter([
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"login",
        element:<Login/>
    }


])
export default AppRoutes