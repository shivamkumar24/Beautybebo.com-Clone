import { Grid } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "black",
        padding: "10px",
        cursor: "pointer",
        marginTop: "15px",
      }}
    >
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "15px",
        }}
      > */}
      <Grid
        width="90%"
        margin="auto"
        templateColumns={{ base: "repeat(1,auto)", md: "repeat(4,1fr)" }}
        gap={6}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ color: "pink" }}>CONTACT INFO</h1>
          <p style={{ color: "white" }}>(+91) 123456756</p>
          <p style={{ color: "white" }}>sales@cosmeticscorner.com</p>
          <p style={{ color: "white" }}>Open time: 10:00AM - 7:00PM</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ color: "pink" }}>QUICK LINKS</h1>
          <p style={{ color: "white" }}>About us</p>
          <p style={{ color: "white" }}>Terms & Conditions</p>
          <p style={{ color: "white" }}>Privacy Policy</p>
          <p style={{ color: "white" }}>Shipping Policy</p>
          <p style={{ color: "white" }}>Return & Refund Policy</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ color: "pink" }}>CUSTOMER INFO</h1>
          <p style={{ color: "white" }}>My Account</p>
          <p style={{ color: "white" }}>Track Your Order</p>
          <p style={{ color: "white" }}>News and Events</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ color: "pink" }}>CATEGORIES</h1>
          <p style={{ color: "white" }}>Skin</p>
          <p style={{ color: "white" }}>Hair</p>
          <p style={{ color: "white" }}>Mom & Baby Care</p>
          <p style={{ color: "white" }}>Personal Care</p>
          <p style={{ color: "white" }}>Ayurved</p>
        </div>
      </Grid>
      {/* </div> */}
      <h2 style={{ textAlign: "center", color: "white" }}>
        © 2020 All Rights Reserved.
      </h2>
    </footer>
  );
};

export default Footer;
