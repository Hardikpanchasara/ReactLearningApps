import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error"
import Homepage from "./pages/Homepage";
import Registerpage from "./pages/Registerpage";

const MainRoutes = createBrowserRouter([
    {
        path : "/" ,
        element : <><Header/><Footer/></> ,
        errorElement : <><Error /></> ,
        children : [
            {
                index : true ,
                element : <><Homepage/></>,
            },
            {
                path : "register" ,
                element : <><Registerpage/></>,
            },
        ]

    }
])

export default MainRoutes