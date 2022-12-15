import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center">
      <HStack display="flex">
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1", display: "flex" }}
                  color={i < rating ? "teal.500" : "gray.300"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
            }
            return <BsStar key={i} style={{ marginLeft: "1" }} />;
          })}
      </HStack>
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function CardProduct({ id, img, price, title, reviewStar, reviewCount }) {
  return (
    <Flex p={3} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        cursor="pointer"
      >
        <Image
          style={{ height: "220px", display: "flex", margin: "auto" }}
          src={img}
          alt={`Picture of ${title}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
            New
          </Badge>

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              margin="8px"
              isTruncated
            >
              {title}
            </Box>
          </Flex>

          <Flex justifyContent="space-around">
            <Rating rating={reviewStar} numReviews={reviewCount} />
            <Box
              fontSize="2xl"
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
            >
              <Box as="span" color={"gray.600"} fontSize="lg">
                ₹
              </Box>
              {price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default CardProduct;
