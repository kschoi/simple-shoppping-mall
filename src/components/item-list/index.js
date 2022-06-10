import React from "react";
import { Grid } from "@chakra-ui/react";
import ItemElement from "./Element";

const ItemList = ({ list }) => {
  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      gap={5}
      p={5}
    >
      {list.map((item) => (
        <ItemElement key={item.id} {...item} />
      ))}
    </Grid>
  );
};

export default ItemList;
