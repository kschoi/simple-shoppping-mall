import React, { useRef, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

const FetchMore = ({ loading, setPage }) => {
  const fetchMoreTrigger = useRef(null);
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) setPage((prev) => prev + 1);
  });

  useEffect(() => {
    fetchMoreObserver.observe(fetchMoreTrigger.current);
    return () => {
      fetchMoreObserver.unobserve(fetchMoreTrigger.current);
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
