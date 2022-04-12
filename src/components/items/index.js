import React from "react";
import { Grid } from "@chakra-ui/react";
import ItemElement from "./Element";
import items from "./mock";

const Item = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)" gap={4}>
      {items.map((item) => (
        <ItemElement key={item.id} {...item} />
      ))}
    </Grid>
  );
};

export default Item;
