import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink as RouterNavLink } from "react-router-dom";

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
          width={{ base: "100%", md: "95%" }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"sm"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              margin={{ base: "5px", md: "15px" }}
              fontSize={{ base: "18px", md: "25px" }}
              textDecoration="none"
              fontWeight="bold"
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
                <RouterNavLink
                  key={el.title}
                  to={el.to}
                  style={{ fontWeight: "bold" }}
                >
                  {el.title}
                </RouterNavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <RouterNavLink
              to="/login"
              style={{
                padding: "5px",
                margin: "2px",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: "bold",
                border: "1px solid grey",
                borderRadius: "7px",
                backgroundColor: "white",
              }}
            >
              Login
            </RouterNavLink>
            <RouterNavLink
              to="/register"
              style={{
                padding: "5px",
                margin: "2px",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: "bold",
                border: "1px solid grey",
                borderRadius: "7px",
                backgroundColor: "white",
              }}
            >
              Register
            </RouterNavLink>
            <RouterNavLink
              to="/cart"
              style={{
                padding: "5px",
                margin: "2px",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: "bold",
                border: "1px solid grey",
                borderRadius: "7px",
                backgroundColor: "white",
              }}
            >
              MyCart
            </RouterNavLink>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((el) => (
                <RouterNavLink
                  key={el.title}
                  to={el.to}
                  style={{ fontWeight: "bold" }}
                >
                  {el.title}
                </RouterNavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
