import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {
  return (
    <div>
      {/* ----------- Navbar ---------- */}
      <Navbar />

      {/* ----------- Order Products ------- */}
      <div>
        <h1>Cart Page</h1>
      </div>

      {/* ----------- Footer ---------- */}
      <Footer />
    </div>
  );
};

export default Cart;
