import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Circle,
  Flex,
  HStack,
  useColorMode,
  useColorModeValue,
  Text,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { Moon, Sun, ShoppingCart } from "react-feather";

const Nav = ({ cartCount }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Flex
      as="nav"
      pos="sticky"
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
      justifyContent="space-between"
      alignItems="center"
      py={2}
      pl={5}
      pr={2}
      bg={bg}
    >
      <Link to="/">
        <Text fontSize="xl" letterSpacing="tight">
          플래닛
        </Text>
      </Link>
      <HStack spacing={2} alignItems="center">
        <Box pos="relative">
          <Link to="/cart">
            <Icon as={ShoppingCart} strokeWidth="1.5" boxSize={6} />
            {cartCount > 0 && (
              <Circle
                boxSize={5}
                pos="absolute"
                left="100%"
                bottom="50%"
                bg="red.400"
                color="white"
                fontSize="sm"
                transform="translateX(-5px)"
              >
                <span>{cartCount}</span>
              </Circle>
            )}
          </Link>
        </Box>
        <IconButton
          onClick={toggleColorMode}
          variant="unstyled"
          icon={
            <Icon
              as={colorMode === "light" ? Sun : Moon}
              boxSize={6}
              strokeWidth="1.5"
            />
          }
          aria-label="테마 변경"
        />
      </HStack>
    </Flex>
  );
};

export default Nav;
