import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Link,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink as Join } from "react-router-dom";

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
];

// const NavLink = ({ children }) => (
//   <Link px={2} py={1} rounded={"md"} href={"#"}>
//     {children}
//   </Link>
// );

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
                <Join key={el.title} to={el.to} style={{ fontWeight: "bold" }}>
                  {el.title}
                </Join>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <Join
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
            </Join>
            <Join
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
            </Join>
            <Join
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
            </Join>
          </Flex>
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
    </div>
  );
}
