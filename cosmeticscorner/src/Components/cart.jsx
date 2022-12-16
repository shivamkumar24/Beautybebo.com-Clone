import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      {/* ----------- Navbar ---------- */}
      <Navbar />

      {/* ----------- Order Products ------- */}
      <div style={{ width: "80%", margin: "auto" }}>
        <p style={{ fontWeight: "bold", fontSize: "22px" }}>SHOPPING CART</p>
        <p>You have no items in your shopping cart.</p>
        <p>
          Click{" "}
          <b>
            <Link to="/">here</Link>
          </b>{" "}
          to continue shopping.
        </p>
      </div>

      {/* ----------- Footer ---------- */}
      <Footer />
    </div>
  );
};

export default Cart;
