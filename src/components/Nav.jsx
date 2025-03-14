import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu } from 'lucide-react'
import './Nav.css'
import { useState } from 'react'

function Nav({ cart }) {
  const [showMenu, setShowMenu] = useState(false)

  function updateMenuState() {
    let temp = !showMenu
    setShowMenu(temp)
    console.log(showMenu)
  }

  return (
    <>
      <nav>
        <button id='menu-icon' onClick={updateMenuState}>
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
      <div id='menu'>
        <ul>
          <Link to='/'>
            <li>Featured</li>
          </Link>
          <Link to='/shop'>
            <li>Browse</li>
          </Link>
          <li>Men</li>
          <li>Women</li>
          <hr />
          <Link to='/cart'>
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Nav

Nav.propTypes = {
  cart: PropTypes.number.isRequired,
}
