import { createBrowserRouter } from "react-router-dom";

const MainRoutes = createBrowserRouter([
    {
        path : "/" ,
        element : <></>,
        errorElement : <></> ,
        children : [
            {
                index : true ,
                element : <></>,
            },
        ]

    }
])

export default MainRoutes