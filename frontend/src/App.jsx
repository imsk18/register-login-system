import React from 'react'
import AppRoutes from './AppRoutes'
import {RouterProvider} from 'react-router'

const App = () => {
 return <RouterProvider  router = {AppRoutes} />;
}

export default App