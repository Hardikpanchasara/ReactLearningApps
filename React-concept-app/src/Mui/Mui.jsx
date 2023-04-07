import React from "react";
import MuiForm from "./MuiForm";
import Appbar from "./Appbar";
import Cards from "./Cards";
import Modals from "./Modals";
import SimpleContainer from "./Containers";
import Listcomponent from "./Listcomponent";
import Accord from "./Accord";
import Drawermenu from "./Drawermenu";
import Responsivegrid from "./Responsivegrid";



const Mui = () => {
    
    return (
        <>
            <div>
                <Appbar/>
                <SimpleContainer />
                <MuiForm/>
                <div className="d-flex justify-content-around">
                <Cards/>
                <Cards/>
                <Cards/>
                </div>
                <div className="d-flex justify-content-center my-4">
                <Modals />
                </div>
                <Listcomponent />
                <Accord />
                <Drawermenu />
                <Responsivegrid />
            </div>
        </>
    )
}

export default Mui;