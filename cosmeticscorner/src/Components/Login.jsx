import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getUserData } from "./api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUserData().then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const checkUser = (e) => {
    e.preventDefault();
    let flag = false;
    data.map((el) => {
      if (el.email === email && el.password === password) {
        flag = true;
      }
    });

    if (flag) {
      toast({
        title: `Login Successfully`,
        status: "success",
        isClosable: true,
      });
      navigate("/");
    } else {
      toast({
        title: `Login Failed`,
        status: "error",
        isClosable: true,
      });
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {/* ---------- Navbar ---------- */}
      <Navbar />

      {/* ----------- Form --------- */}
      <FormControl
        width={{ base: "80%", md: "50%" }}
        margin="auto"
        marginTop="3%"
        marginBottom="3%"
        border="1px solid black"
        padding="25px"
        backgroundColor={"gray.100"}
      >
        <FormLabel textAlign="center">
          If you have an account, sign in with your registered email address.
        </FormLabel>
        <hr />

        <FormLabel marginTop="25px">Email: </FormLabel>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          style={{ margin: "10px 0px" }}
        />

        <FormLabel>Password:</FormLabel>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          style={{ margin: "10px 0px" }}
        />

        <Button
          onClick={checkUser}
          style={{ border: "1px solid black", backgroundColor: "white" }}
        >
          Login
        </Button>
      </FormControl>

      {/* ------------ Footer ---------- */}
      <Footer />
    </div>
  );
};

export default Login;
