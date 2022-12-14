import React from "react";
import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Register = () => {
  return (
    <div>
      {/* ---------- Navbar --------- */}
      <Navbar />
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "12px",
          fontSize: "22px",
        }}
      >
        CREATE NEW CUSTOMER ACCOUNT
      </p>

      {/* ------------ Form --------- */}
      <FormControl
        width="40%"
        margin="auto"
        marginTop="3%"
        marginBottom="3%"
        border="1px solid black"
        padding="25px"
        backgroundColor={"gray.100"}
      >
        <FormLabel textAlign="center">Welcome to CosmeticsCorner</FormLabel>

        <FormLabel>Name: </FormLabel>
        <Input type="text" style={{ margin: "5px" }} />

        <FormLabel>Phone: </FormLabel>
        <Input type="number" style={{ margin: "5px" }} />

        <FormLabel>Email: </FormLabel>
        <Input type="email" style={{ margin: "5px" }} />

        <FormLabel>Password:</FormLabel>
        <Input type="password" style={{ margin: "5px" }} />

        <FormLabel>Confirm Password:</FormLabel>
        <Input type="password" style={{ margin: "5px" }} />

        <Button style={{ border: "1px solid black", backgroundColor: "white" }}>
          Register
        </Button>
      </FormControl>

      {/* ----------- Footer ---------- */}
      <Footer />
    </div>
  );
};

export default Register;
