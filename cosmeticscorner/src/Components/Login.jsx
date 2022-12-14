import React from "react";
import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <FormControl
        width="40%"
        margin="auto"
        marginTop="7%"
        border="1px solid black"
        padding="25px"
        backgroundColor={"gray.100"}
      >
        <FormLabel textAlign="center">
          If you have an account, sign in with your registered email address.
        </FormLabel>
        <hr />

        <FormLabel marginTop="25px">Email: </FormLabel>
        <Input type="email" style={{ margin: "10px 0px" }} />

        <FormLabel>Password:</FormLabel>
        <Input type="password" style={{ margin: "10px 0px" }} />

        <Button style={{ border: "1px solid black", backgroundColor: "white" }}>
          Login
        </Button>
      </FormControl>
    </div>
  );
};

export default Login;
