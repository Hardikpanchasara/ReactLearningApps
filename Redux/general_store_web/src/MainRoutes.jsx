import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer"
import About from "./Components/About";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import ProductDetails from "./Components/ProductDetails";
import Error from "./Components/Error";
import SerchBox from "./Components/SerchBox";

const MainRoutes = createBrowserRouter([
    {
        path : "/" ,
        element : <><Header /><Footer /></> ,
        errorElement : <Error /> ,
        children : [
            {
                index : 1 ,
                element : <><Home /></>,
            },
            {
                path : "about" ,
                element : <About /> ,
            },
            {
                path : "product" ,
                element : <><SerchBox /> <Product /></> ,
            },
            {
                path : "contact" ,
                element : <Contact /> ,
            },
            {
                path : "details/:id" ,
                element : <ProductDetails /> ,
            },
        ],
    },
])

export default MainRoutes