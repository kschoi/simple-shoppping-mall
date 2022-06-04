import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
// import Axios from "axios";

import network from "../network";
import { sleep } from "../utils/misc";
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

      await sleep(0);
      const data = await network.apps().fetchItems({
        params: {
          _start: ITEMS_PER_PAGE * page,
          _limit: ITEMS_PER_PAGE,
        },
      });
      setList((prev) => [...prev, ...data]);

      setLoading(false);
    };
    fetchData();
  }, [page]);

  return (
    <Box pos="relative">
      <ItemList list={list} />
      <FetchMore loading={page !== 0 && loading} setPage={setPage} />
    </Box>
  );
};

export default Home;
