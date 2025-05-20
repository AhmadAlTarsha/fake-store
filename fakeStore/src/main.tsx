import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/cartContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <>
        <App />
        <Toaster position="top-right" reverseOrder={false} />
      </>
    </CartProvider>
  </React.StrictMode>
);
