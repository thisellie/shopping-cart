import App from './App.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'
import Error from './pages/Error.jsx'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]

export default routes
