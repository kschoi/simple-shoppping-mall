import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  AspectRatio,
  Box,
  Flex,
  VStack,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Cart = ({ items }) => {
  const bg = useColorModeValue("white", "gray.800");

  const totalAmount = useMemo(
    () =>
      items.reduce((prev, item) => {
        prev += item.price * item.quantity;
        return prev;
      }, 0),
    [items]
  );

  return (
    <Box p={5}>
      {items.length > 0 ? (
        <VStack spacing={4}>
          {items.map(({ id, name, price, thumbnailUrl, quantity }) => (
            <Flex key={id} w="full" bg={bg} alignItems="center">
              <Box w="100px" mr={4}>
                <Link to={`/item/${id}`}>
                  <AspectRatio ratio={1}>
                    <Image src={thumbnailUrl} alt={name} />
                  </AspectRatio>
                </Link>
              </Box>
              <Box>
                <Text>{name}</Text>
                <Text>{Number(price).toLocaleString()}</Text>
                <Text fontWeight="bold">수량: {quantity}</Text>
              </Box>
            </Flex>
          ))}
        </VStack>
      ) : (
        <div>장바구니에 담긴 상품이 없습니다.</div>
      )}
      <Box>결제 예정금액: {totalAmount}</Box>
    </Box>
  );
};

export default Cart;
