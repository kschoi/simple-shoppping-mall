import React from "react";
import {
  AspectRatio,
  Box,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ItemElement = ({ id, title, price, thumbnailUrl }) => {
  return (
    <Box>
      <Text fontSize="lg">{id}</Text>
      <Link to={`/item/${id}`}>
        <AspectRatio ratio={1}>
          <Image src={thumbnailUrl} alt="" />
        </AspectRatio>
        <Text>{title}</Text>
        <Text fontWeight="bold">
          {Number(price) ? Number(price).toLocaleString() : "10,000"}
        </Text>
      </Link>
    </Box>
  );
};

export default ItemElement;
