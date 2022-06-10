import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AspectRatio,
  Image,
  Text,
  Box,
  Flex,
  Skeleton,
  SkeletonText,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { ShoppingCart } from "react-feather";

import network from "../network";

const ItemDetailView = ({ addToCart }) => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await network.apps().fetchItem(id);
      setItem(data);
    };
    fetchData();
  }, []);

  return (
    <section>
      {item ? (
        <section>
          <AspectRatio ratio={1}>
            <Image src={item.thumbnailUrl} alt={item.title} />
          </AspectRatio>
          <Flex justifyContent="space-between" alignItems="center" p={5}>
            <Box>
              <Text fontSize="lg">{item.title}</Text>
              <Text fontWeight="bold">{item.price}</Text>
            </Box>

            <IconButton
              onClick={() => addToCart(item)}
              variant="unstyled"
              icon={<Icon as={ShoppingCart} strokeWidth="1.5" boxSize={8} />}
              aria-label="장바구니에 담기"
            />
          </Flex>
        </section>
      ) : (
        <>
          {/* 1. spinner */}
          {/* <Spinner color="red.500" my={5} /> */}
          <Skeleton pt="100%" />
          <SkeletonText mt="4" noOfLines={3} spacing="4" />
        </>
      )}
    </section>
  );
};

export default ItemDetailView;
