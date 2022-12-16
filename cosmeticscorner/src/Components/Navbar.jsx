import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/skin",
    title: "Skin",
  },
  {
    to: "/hair",
    title: "Hair",
  },
  {
    to: "/personalcare",
    title: "Personal care",
  },
  {
    to: "/babycare",
    title: "Mom & Baby Care",
  },
  {
    to: "/perfume",
    title: "Perfume",
  },
  {
    to: "/ayurved",
    title: "Ayurved",
  },
  //   "Skin",
  //   "Hair",
  //   "Personal Care",
  //   "Mom & Baby Care",
  //   "Perfume",
  //   "Ayurved",
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <img
        src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg"
        alt="navbar_banner"
        style={{ width: "100%" }}
      />
      <Box bg={useColorModeValue("pink.400", "gray.600")} px={4}>
        <Flex
          h={12}
          margin="auto"
          width="95%"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              style={{
                margin: "12px",
                textDecoration: "none",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              {/* <Image src="../logo.png" alt="CosmeticsCorner" /> */}
              CosmeticsCorner
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((el) => (
                <NavLink
                  key={el.title}
                  to={el.to}
                  style={{ fontWeight: "bold" }}
                >
                  {el.title}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <NavLink
              to="/login"
              style={{
                padding: "5px",
                margin: "2px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "bold",
                border: "1px solid grey",
                borderRadius: "7px",
                backgroundColor: "white",
              }}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              style={{
                padding: "5px",
                margin: "2px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "bold",
                border: "1px solid grey",
                borderRadius: "7px",
                backgroundColor: "white",
              }}
            >
              Register
            </NavLink>
            <NavLink
              to="/cart"
              style={{
                padding: "5px",
                margin: "2px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "bold",
                border: "1px solid grey",
                borderRadius: "7px",
                backgroundColor: "white",
              }}
            >
              MyCart
            </NavLink>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
