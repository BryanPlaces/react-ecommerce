import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import Home from "../pages/Home.tsx";
import Products from "../pages/Products.tsx";
import ProductDetails from "../pages/ProductDetails.tsx";
import Cart from "../pages/Cart.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:productId',
        element: <ProductDetails />
      },
      {
        path: '/cart',
        element: <Cart />
      },
    ]
  }
])