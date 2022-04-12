import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Circle,
  Flex,
  IconButton,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Nav = ({ cartCount }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.700");

  return (
    <Flex as="nav" justifyContent="space-between" p={5} bg={bg}>
      <HStack as="ul" spacing="20px">
        <Box as="li">
          <Link to="/">Home</Link>
        </Box>
        <Box as="li" pos="relative">
          <Link to="/cart">
            Cart
            <Circle
              boxSize={5}
              pos="absolute"
              left="100%"
              bottom="50%"
              bg="red.400"
              color="white"
              fontSize="sm"
            >
              {cartCount > 0 && <span>{cartCount}</span>}
            </Circle>
          </Link>
        </Box>
      </HStack>
      <IconButton
        onClick={toggleColorMode}
        aria-label="Change Color Mode"
        variant="unstyled"
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      />
    </Flex>
  );
};

export default Nav;
