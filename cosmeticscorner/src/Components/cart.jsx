import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { deleteOrderData, getOrderData } from "./api";
import { Link, NavLink } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState([]);
  let amount = 0;

  useEffect(() => {
    handleGetData();
  });

  const handleGetData = () => {
    getOrderData()
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log("Error: ", err));
  };

  const deleteItems = (id) => {
    deleteOrderData(id)
      .then((res) => {
        handleGetData();
      })
      .catch((error) => console.log(error));
  };

  if (data.length === 0) {
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
  } else {
    return (
      <div>
        {/* ----------- Navbar ---------- */}
        <Navbar />

        {/* ----------- Order Products ------- */}
        <div
          style={{
            width: "80%",
            margin: "auto",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              textDecoration: "underline",
            }}
          >
            SHOPPING CART
          </p>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <p style={{ fontWeight: "bold", fontSize: "22px" }}>
            Total Items: {data.length}
          </p>

          {data.map((el) => {
            amount = amount + Number(el.price);
          })}
          <p style={{ fontWeight: "bold", fontSize: "22px" }}>
            Total Amount: {amount}
          </p>
          <button
            style={{
              padding: "7px 10px",
              border: "1px solid black",
              borderRadius: "12px",
              fontWeight: "bold",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <NavLink to="/paymentform">Shopping Continue</NavLink>
          </button>
        </div>
        <div
          style={{
            width: "90%",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "4",
          }}
        >
          {data.map((el) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  borderRadius: "15px",
                  padding: "10px",
                  margin: "10px",
                  alignItems: "center",
                }}
              >
                <img src={el.img} alt="image" />
                <b>
                  <p>{el.title}</p>
                </b>
                <b>
                  <p>Price: ₹{el.price}</p>
                </b>
                <button
                  style={{
                    padding: "5px 22px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "12px",
                    fontWeight: "bold",
                  }}
                  onClick={() => deleteItems(el.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>

        {/* ----------- Footer ---------- */}
        <Footer />
      </div>
    );
  }
};

export default Cart;
