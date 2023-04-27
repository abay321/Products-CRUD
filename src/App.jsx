import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/rootLayout/RootLayout";
import HomePage from "./pages/home/Home";
import ProductsPage, {
  loader as productLoader,
} from "./pages/products/Products";
import ProductLayout from "./pages/productLayout/ProductLayout";
import ErrorPage from "./pages/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductLayout />,
        children: [
          {
            index: true,
            element: <ProductsPage />,
            loader: productLoader,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
