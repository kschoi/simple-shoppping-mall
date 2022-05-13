import React from "react";
import {
  AspectRatio,
  Box,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ItemElement = ({ id, name, price, imageUrl }) => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box w="full" bg={bg} p="20px">
      <Text>{id}</Text>
      <Link to={`/item/${id}`}>
        <AspectRatio ratio={1}>
          <Image src={imageUrl} alt={name} />
        </AspectRatio>
        <Text>{name}</Text>
        <Text fontWeight="bold">{Number(price).toLocaleString()}</Text>
      </Link>
    </Box>
  );
};

export default ItemElement;
