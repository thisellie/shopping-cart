import './CartItem.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function CartItem({ product }) {
  return (
    <Link to={`/shop/${product.id}`} className='cart-item'>
      <img src={product.image} alt={product.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{product.title}</h3>
        <p className="cart-item-price">${product.price.toFixed(2)}</p>
        <p className="cart-item-quantity">Quantity: {product.quantity}</p>
      </div>
    </Link>
  )
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
}

