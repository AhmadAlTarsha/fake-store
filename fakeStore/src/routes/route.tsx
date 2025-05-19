import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [],
  },
]);
