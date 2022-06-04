import React, { useRef, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

// Observe config
const config = {
  // Use the whole screen as scroll area
  root: null,
  // Do not grow or shrink the root area
  rootMargin: "0px",
  // Threshold of 1.0 will fire callback when 100% of element is visible
  threshold: 0.0,
};

const FetchMore = ({ loading, setPage }) => {
  const fetchMoreTrigger = useRef(null);

  useEffect(() => {
    const fetchMoreObserver = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) setPage((prev) => prev + 1);
      },
      config
    );

    fetchMoreObserver.observe(fetchMoreTrigger.current);

    return () => {
      fetchMoreObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={fetchMoreTrigger}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {loading && <Spinner color="red.500" my={5} />}
    </div>
  );
};

export default FetchMore;
