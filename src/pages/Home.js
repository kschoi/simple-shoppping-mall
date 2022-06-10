import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
// import Axios from "axios";

import network from "../network";
import ItemList from "../components/item-list";
import FetchMore from "../components/fetch-more";

const ITEMS_PER_PAGE = 20;

const Home = () => {
  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // 1. fetch api
      // fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10")
      //   .then((res) => res.json())
      //   .then((data) => {
      //     // console.log(data);
      //   })
      //   .catch((error) => {
      //     console.debug(error);
      //   });

      // 2. axios
      // Axios({
      //   url: `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${ITEMS_PER_PAGE}`,
      // })
      //   .then((res) => {
      //     setList((prev) => [...prev, ...res.data]);
      //   })
      //   .catch((error) => {
      //     console.debug(error);
      //   });

      // 3. network service
      try {
        const data = await network.apps().fetchItems({
          params: {
            _start: ITEMS_PER_PAGE * page,
            _limit: ITEMS_PER_PAGE,
          },
        });
        setList((prev) => [...prev, ...data]);
      } catch (e) {
        console.debug(`infinite scroll error: ${e}`);
      }

      setLoading(false);
    };
    fetchData();
  }, [page]);

  return (
    <Box pos="relative">
      <Box minH="100vh">
        <ItemList list={list} />
      </Box>
      <FetchMore loading={page !== 0 && loading} setPage={setPage} />
    </Box>
  );
};

export default Home;
