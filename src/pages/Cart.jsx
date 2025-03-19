import { useOutletContext } from 'react-router-dom'
import './Cart.css'
import CartItem from '../components/CartItem'

function Cart() {
  const [cart] = useOutletContext()
  return (
      <main id='cart'>
        {cart.map(product => (
          <CartItem key={product.id} product={product}></CartItem>
        ))}
      </main>
  )
}

export default Cart
