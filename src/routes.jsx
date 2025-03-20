import App from './App.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'
import Error from './pages/Error.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        index: true,
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'shop/:productId',
        element: <Product />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]

export default routes
