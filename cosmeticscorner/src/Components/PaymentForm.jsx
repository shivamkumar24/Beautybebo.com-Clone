import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Success from "./Success";
import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const PaymentForm = () => {
  return (
    <div>
      {/* ----------- Navbar -------- */}
      <Navbar />

      {/* ------------ Address Form --------- */}
      <FormControl
        width="40%"
        margin="auto"
        marginTop="3%"
        marginBottom="3%"
        border="1px solid black"
        padding="25px"
        backgroundColor={"gray.100"}
      >
        <FormLabel textAlign="center">
          Please, Fill the Shipping Address
        </FormLabel>

        <FormLabel>Name </FormLabel>
        <Input type="text" placeholder="Name" style={{ margin: "5px" }} />

        <FormLabel>Phone </FormLabel>
        <Input type="number" placeholder="Phone" style={{ margin: "5px" }} />

        <FormLabel>Address </FormLabel>
        <Input type="text" placeholder="Phone" style={{ margin: "5px" }} />

        <FormLabel>PinCode </FormLabel>
        <Input type="number" placeholder="Phone" style={{ margin: "5px" }} />

        <FormLabel>City: </FormLabel>
        <Input type="text" placeholder="Phone" style={{ margin: "5px" }} />

        <FormLabel>State </FormLabel>
        <Input type="text" placeholder="Phone" style={{ margin: "5px" }} />

        <FormLabel>Country </FormLabel>
        <Input type="text" placeholder="Phone" style={{ margin: "5px" }} />

        <Button
          style={{
            border: "1px solid black",
            backgroundColor: "white",
            margin: "15px",
          }}
        >
          <NavLink to="/success">Confirm Address</NavLink>
        </Button>
      </FormControl>

      {/* ------------ Footer ------------ */}
      <Footer />
    </div>
  );
};

export default PaymentForm;
