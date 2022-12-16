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
import HomeProductDetails from "../Components/HomeProductDetails";
import SkinProductDetails from "../Components/SkinPage/SkinProductDetails";
import PersonalCareProductDetails from "../Components/PersonalCarePage/PersonalCareProductDetails";
import PerfumeProductDetails from "../Components/PerfumePage/PerfumeProductDetails";
import HairProductsDetails from "../Components/HairPage/HairProductsDetails";
import BabyCareProductDetails from "../Components/BabyCarePage/BabyCareProductDetails";
import AyurvedProductDetails from "../Components/AyurvedPage/AyurvedProductDetails";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:id" element={<HomeProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/skin/:id" element={<SkinProductDetails />} />
        <Route path="/personalcare" element={<PersonalCare />} />
        <Route
          path="/personalcare/:id"
          element={<PersonalCareProductDetails />}
        />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/perfume/:id" element={<PerfumeProductDetails />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/hair/:id" element={<HairProductsDetails />} />
        <Route path="/babycare" element={<BabyCare />} />
        <Route path="/babycare/:id" element={<BabyCareProductDetails />} />
        <Route path="/ayurved" element={<Ayurved />} />
        <Route path="/ayurved/:id" element={<AyurvedProductDetails />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
