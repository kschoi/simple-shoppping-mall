import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Nav from "./components/nav";
import Home from "./pages/Home";
import ItemDetailView from "./pages/ItemDetailView";
import Cart from "./pages/Cart";
import mockItems from "./components/items/mock";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  //장바구니에 선택한 물품 추가
  const handleAddToCart = (currentItem) => {
    setCartItems((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      if (next.some((item) => item.id === currentItem.id)) {
        let index = next.findIndex((item) => item.id === currentItem.id);
        next[index].quantity += 1;
      } else {
        next.push({ ...currentItem, quantity: 1 });
      }
      return next;
    });

    // cart가 업데이트되면 local storage에 cart 업데이트하기
    localStorage.cartItems = JSON.stringify(cartItems);

    // 장바구니로 이동하기
    navigate("/cart");
  };

  useEffect(() => {
    // 상품 데이터 불러오기
    setItems(mockItems);

    // cart state가 local storage에 있으면 불러오기
    if (localStorage.cartItems) {
      setCartItems(JSON.parse(localStorage.cartItems));
    }
  }, []);

  return (
    <>
      <Nav cartCount={cartItems.length} />
      <Box as="section" p={4}>
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route
            path="item/:id"
            element={
              <ItemDetailView items={items} addToCart={handleAddToCart} />
            }
          />
          <Route path="cart" element={<Cart items={cartItems} />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
