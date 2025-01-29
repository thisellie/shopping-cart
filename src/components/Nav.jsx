import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import './Nav.css'

function Nav({ cart }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
      <ShoppingCart />
      <p>{cart}</p>
    </nav>
  )
}

export default Nav

Nav.propTypes = {
  cart: PropTypes.number.isRequired,
}
