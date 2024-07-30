import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Tourblog from "../tours/Tourblog";
import Tour from "../Tour/Tour";
import Searchsingletour from "../Home/Searchsingletour";
const Routing = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
  
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tourblog/:id" element={<Tourblog />} />
        <Route path="/tour" element={< Tour/>} />
        <Route path="/searchsingletour/:id" element={< Searchsingletour/>} />
      </Routes>
    </>
  );
};
export default Routing;
