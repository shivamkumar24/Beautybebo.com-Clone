import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Cart from "../Components/Cart";
import Skin from "../Components/SkinPage/Skin";
import PersonalCare from "../Components/PersonalCarePage/PersonalCare";
import Perfume from "../Components/PerfumePage/Perfume";
import Hair from "../Components/HairPage/Hair";
import BabyCare from "../Components/BabyCarePage/BabyCare";
import Ayurved from "../Components/AyurvedPage/Ayurved";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/personalcare" element={<PersonalCare />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/babycare" element={<BabyCare />} />
        <Route path="/ayurved" element={<Ayurved />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
