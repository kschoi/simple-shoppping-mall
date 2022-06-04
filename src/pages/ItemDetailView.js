import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AspectRatio,
  Button,
  Image,
  Text,
  Spinner,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

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
        <>
          <AspectRatio ratio={1}>
            <Image src={item.thumbnailUrl} alt={item.title} />
          </AspectRatio>
          <Text fontSize="lg">{item.title}</Text>
          <Text fontWeight="bold">{item.price}</Text>
          <Button colorScheme="red" onClick={() => addToCart(item)}>
            장바구니에 담기
          </Button>
        </>
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
