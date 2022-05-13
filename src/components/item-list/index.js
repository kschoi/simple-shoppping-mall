import React from "react";
import { Grid } from "@chakra-ui/react";
import ItemElement from "./Element";

const ItemList = ({ list }) => {
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)" gap={4}>
      {list.map((item) => (
        <ItemElement key={item.id} {...item} />
      ))}
    </Grid>
  );
};

export default ItemList;
