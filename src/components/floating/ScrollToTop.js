import React, { useCallback, useState, useEffect } from "react";
import { Box, Icon, IconButton } from "@chakra-ui/react";
import { ArrowUp } from "react-feather";

const MemoizedButton = React.memo(() => {
  const onClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IconButton
      aria-label="페이지 맨 처음으로"
      icon={<Icon as={ArrowUp} boxSize={5} />}
      onClick={onClick}
    />
  );
});

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Box display={isVisible ? "" : "none"}>
      <MemoizedButton />
    </Box>
  );
};

export default ScrollToTop;
