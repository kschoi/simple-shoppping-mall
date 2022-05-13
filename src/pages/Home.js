import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import ItemList from "../components/item-list";
import FetchMore from "../components/fetch-more";
import mockData from "../entities/item-list/mock";
import { dummyFetcher } from "../utils/dummyFetcher";

const ITEMS_PER_PAGE = 10;
const pageList = [];

const getList = (page) => {
  const start = ITEMS_PER_PAGE * page;
  const end = start + ITEMS_PER_PAGE;

  if (!pageList[page]) {
    pageList[page] = mockData.slice(start, end);
  }
  console.log(`pageList[${page}]`, pageList[page]);

  return pageList[page];
};

const Home = () => {
  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const list = await dummyFetcher(getList, page);
      setList((prev) => [...prev, ...list]);
      setLoading(false);
    }
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
