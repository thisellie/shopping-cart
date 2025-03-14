import './Card.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

function getStars(rating) {
  const stars = []
  for (let i = 1; i <= 5; i++)
    if (i <= rating) stars.push(<FaStar color='#92817a' key={i} />)
    else if (i - rating < 1) stars.push(<FaStarHalfAlt color='#92817a' key={i} />)
    else stars.push(<FaRegStar color='#92817a' key={i} />)
  return stars
}

function Card({ product }) {
  return (
    <Link to={`/shop/${product.id}`} className='card'>
      <img className='image' src={product.image} alt={product.title} />
      <h3 className='title'>{product.title}</h3>
      <h4 className='price'>${product.price}</h4>
      <div className='rate'>{getStars(product.rating.rate)}</div>
    </Link>
  )
}

export default Card

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}
