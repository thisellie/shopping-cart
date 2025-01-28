import PropTypes from 'prop-types'

function Card({ product, addToCart }) {
  return (
    <>
      <div className='card'>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <img src={product.image} alt={product.title} />
        <p>{product.rating.rate}</p>
        <p>{product.rating.count}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </>
  )
}

export default Card

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
}
