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

//create dynamic routing routing.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/produts",
        element: <ProductPage />
      },
      {
        path: "/users/:userId",
        element: <Users />
      },
      {
        path: "/produt/:productId",
        element: <Product />
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
