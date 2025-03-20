import './Nav.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'

function Nav({ cart }) {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <nav>
        <button id="menu-icon" onClick={toggleMenu}>
          {showMenu ? <X /> : <Menu color="#010101" />}
        </button>
        <ul className="desktop-menu">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
        </ul>
        <h1>
          <Link to="/">thisellie&apos;s shop</Link>
        </h1>
        <div>
          <Link to="/cart">
            <ShoppingCart strokeWidth={1} />
            <div id="cart-count">
              <p>{cart}</p>
            </div>
          </Link>
          <Link to="/cart">
            <p>Cart</p>
          </Link>
        </div>
      </nav>
      {showMenu && (
        <div id="menu" className="mobile-menu">
          <ul>
            <Link to="/" onClick={toggleMenu}>
              <li>Home</li>
            </Link>
            <Link to="/shop" onClick={toggleMenu}>
              <li>Shop</li>
            </Link>
            <hr />
            <Link to="/cart" onClick={toggleMenu}>
              <li>Cart</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  )
}

export default Nav

Nav.propTypes = {
  cart: PropTypes.number.isRequired,
}
