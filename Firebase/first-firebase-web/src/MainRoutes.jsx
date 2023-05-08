import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error"
import Homepage from "./pages/Homepage";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";
import AddProductspage from "./pages/AddProductspage";

const MainRoutes = createBrowserRouter([
    {
        path : "/" ,
        element : <><Header/><Footer/></> ,
        errorElement : <><Error /></> ,
        children : [
            {
                index : true ,
                element : <Homepage/>,
            },
            {
                path : "addproduct" ,
                element : <AddProductspage/>,
            },
            {
                path : "register" ,
                element : <Registerpage/>,
            },
            {
                path : "login" ,
                element : <Loginpage/>,
            },
        ]

    }
])

export default MainRoutes