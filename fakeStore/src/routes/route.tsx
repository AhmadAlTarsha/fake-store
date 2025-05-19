import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts";
import LatestProduct from "../pages/latestProduct/latestProduct";
import ProductsPage from "../pages/AllProducts/AllProducts";
import Cart from "../pages/cart/cart";
import ProductDetails from "../pages/productDetails/productDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        element: <LatestProduct />,
        path: "latestProducts",
      },
      {
        element: <ProductsPage />,
        path: "productsPage",
      },
      {
        element: <Cart />,
        path: "cart",
      },
      {
        element: <ProductDetails />,
        path: "productDetails",
      },
    ],
  },
]);
