import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";

const Routing = () => {

    return (

        <>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />

            </Routes>

        </>
    )
}
export default Routing