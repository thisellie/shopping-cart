import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu } from 'lucide-react'
import './Nav.css'

function Nav({ cart }) {
  return (
    <nav>
      <button id='menu'>
        <Menu strokeWidth={1} />
      </button>
      <ul>
        <Link to='/'>
          <li>Featured</li>
        </Link>
        <Link to='/shop'>
          <li>Browse</li>
        </Link>
        <li>Men</li>
        <li>Women</li>
      </ul>
      <h1>
        <Link to='/'>thisellie&apos;s shop</Link>
      </h1>
      <div>
        <Link to='/cart'>
          <ShoppingCart strokeWidth={1} />
          <div id='cart-count'>
            <p>{cart}</p>
          </div>
        </Link>
        <Link to='/cart'>
          <p>Cart</p>
        </Link>
      </div>
    </nav>
  )
}

export default Nav

Nav.propTypes = {
  cart: PropTypes.number.isRequired,
}
