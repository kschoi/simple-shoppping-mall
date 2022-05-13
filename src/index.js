import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

const root = createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Router>
      <App />
    </Router>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
