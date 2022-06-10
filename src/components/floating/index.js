import React from "react";
import { Box } from "@chakra-ui/react";

import ScrollToTop from "./ScrollToTop";

const Floating = () => {
  return (
    <Box pos="fixed" bottom="0" right="0" p={4}>
      <ScrollToTop />
    </Box>
  );
};

export default Floating;
