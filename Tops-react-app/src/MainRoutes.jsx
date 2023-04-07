import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import About from './component/About'
import Example from './component/Example'
import Feature from './component/Feature'
import Home from './component/Home'
import Pricing from './component/Pricing'
import Error404Page from './component/Error404Page'

const ClassRoutes = React.lazy(() => import('./component/ClassComponent/ClassRoutes'))
const FunctionRoutes = React.lazy(() => import('./component/FunctionComponent/FunctionRoutes'))


const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement : <Error404Page />
    },
    {
        path: "/feature",
        element: <Feature />,
    },
    {
        path: "/pricing",
        element: <Pricing />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/example",
        element: <Example />,
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