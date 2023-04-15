import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import About from './component/About'
import Example from './component/Example'
import Feature from './component/Feature'
import Home from './component/Home'
import Error404Page from './component/Error404Page'
import Navbar from './component/Navbar'

const ClassRoutes = React.lazy(() => import('./component/ClassComponent/ClassRoutes'))
const FunctionRoutes = React.lazy(() => import('./component/FunctionComponent/FunctionRoutes'))


const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /><Home /></>,
        errorElement : <Error404Page />
        // ErrorBoundary: Error404Page
    },
    {
        path: "/feature",
        element: <><Navbar /><Feature /></>,
    },
    {
        path: "/about",
        element: <><Navbar /><About /></>,
    },
    {
        path: "/example",
        element: <><Navbar /><Example /></>,
        children: [
            {
                path: "classcomponent/*",
                element: <Suspense fallback={<div>Loading...</div>}><ClassRoutes /></Suspense>,
            },
            {
                path: "functioncomponent/*",
                element: <Suspense fallback={<div>Loading...</div>}><FunctionRoutes /></Suspense>
            },
        ],
    },
])

export default MainRoutes