import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Users from './pages/Users.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Product from './components/Product.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Layout from './components/Layout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Dashboard from './components/Dashboard.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Inputform from './customHooks/Inputform.jsx';

//create dynamic routing routing.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },

      {
        path: "/users/:userId",
        element: <Users />
      },
      {
        path: "/products",
        element: <ProductPage />
      },
      {
        path: "/product/:productId",
        element: <Product />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/addnewproductform",
        element: <Inputform />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />
          },

        ]
      },
      {
        path: "*",
        element: <NotFound />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
