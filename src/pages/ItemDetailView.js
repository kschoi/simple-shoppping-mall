import React from "react";
import { useParams } from "react-router-dom";
import { AspectRatio, Button, Image, Text } from "@chakra-ui/react";

const ItemDetailView = ({ items, addToCart }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id == id);

  if (!item) {
    return null;
  }

  return (
    <section>
      <AspectRatio ratio={1}>
        <Image src={item.imageUrl} alt={item.name} />
      </AspectRatio>
      <Text fontSize="lg">{item.name}</Text>
      <Text fontWeight="bold">{item.price}</Text>
      <Button colorScheme="red" onClick={() => addToCart(item)}>
        장바구니에 담기
      </Button>
    </section>
  );
};

export default ItemDetailView;
