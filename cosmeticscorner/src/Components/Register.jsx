import React, { useState } from "react";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  useToast,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { postUserData } from "./api";

const Register = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();

  const getData = (e) => {
    e.preventDefault();
    // console.log(Math.floor(Math.random() * 1000));

    if (
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      password !== "" &&
      cpassword !== ""
    ) {
      if (Number(password) === Number(cpassword)) {
        postUserData(name, phone, email, password);
      } else {
        toast({
          title: `Password and Confirm Password not matched`,
          status: "error",
          isClosable: true,
        });
      }
    } else {
      toast({
        title: `Please fil all data ......`,
        status: "error",
        isClosable: true,
      });
    }

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setCPassword("");
  };

  return (
    <div>
      {/* ---------- Navbar --------- */}
      <Navbar />
      <Text
        textAlign="center"
        fontWeight="bold"
        marginTop="12px"
        fontSize={{ base: "18px", md: "22px" }}
      >
        CREATE NEW CUSTOMER ACCOUNT
      </Text>

      {/* ------------ Form --------- */}
      <FormControl
        width={{ base: "80%", md: "50%" }}
        margin="auto"
        marginTop="3%"
        marginBottom="3%"
        border="1px solid black"
        padding="25px"
        backgroundColor={"gray.100"}
      >
        <FormLabel textAlign="center">Welcome to CosmeticsCorner</FormLabel>

        <FormLabel>Name: </FormLabel>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
          style={{ margin: "5px" }}
        />

        <FormLabel>Phone: </FormLabel>
        <Input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type="number"
          placeholder="Phone"
          style={{ margin: "5px" }}
        />

        <FormLabel>Email: </FormLabel>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          style={{ margin: "5px" }}
        />

        <FormLabel>Password:</FormLabel>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          style={{ margin: "5px" }}
        />

        <FormLabel>Confirm Password:</FormLabel>
        <Input
          onChange={(e) => setCPassword(e.target.value)}
          value={cpassword}
          type="password"
          placeholder="Confirm - Password"
          style={{ margin: "5px" }}
        />

        <Button
          style={{ border: "1px solid black", backgroundColor: "white" }}
          onClick={getData}
        >
          Register
        </Button>
      </FormControl>

      {/* ----------- Footer ---------- */}
      <Footer />
    </div>
  );
};

export default Register;
