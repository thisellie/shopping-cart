import { useOutletContext } from 'react-router-dom'
import './Cart.css'
import CartItem from '../components/CartItem'
import Card from '../components/Card'

function Cart() {
  const [cart] = useOutletContext()
  return (
    <>
      <main id='cart'>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        {/* {cart.map(product => (
          <Card key={product.id} product={product}></Card>
        ))} */}
      </main>
    </>
  )
}

export default Cart
