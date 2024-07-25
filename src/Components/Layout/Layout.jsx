import React from "react";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import Footer from "../Footer/Footer";

const Layout = ()=>{
    return(
        <div>
            <Header/>
            <Routing />
            <Footer />
        </div>
    )
}
export default Layout