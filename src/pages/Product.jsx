import './Product.css'
import { useState, useEffect } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import Loading from '../components/Loading'

function getStars(rating) {
  const stars = []
  for (let i = 1; i <= 5; i++)
    if (i <= rating) stars.push(<FaStar key={i} />)
    else if (i - rating < 1) stars.push(<FaStarHalfAlt key={i} />)
    else stars.push(<FaRegStar key={i} />)
  return stars
}

export default function Product() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [cart, setCart] = useOutletContext()
  const [quantity, setQuantity] = useState(1)

  function addToCart(product) {
    const item = cart.find(item => item.id === product.id)
    if (item) {
      item.quantity += quantity
    } else {
      setCart([...cart, { ...product, quantity }])
    }
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch(error => console.log(error))
  }, [productId])

  if (!product) {
    return <Loading />
  }

  return (
    // TODO: Add loading skeleton
    <main id="product">
      <img className="image" src={product.image} alt={product.title} />
      <div className="product-details">
        <h1 className="title">{product.title}</h1>
        <p className="rate">{getStars(product.rating.rate)}</p>
        <h2 className="price">${product.price}</h2>
        <p className="description">{product.description}</p>
        <p className="quantity">
          <span><b style={{ marginRight: '1rem' }}>Quantity</b></span>
          <button className="quantity-button" onClick={() => setQuantity(quantity - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8z" />
            </svg>
          </button>
          <input className="quantity-input" type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
          <button className="quantity-button" onClick={() => setQuantity(quantity + 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        </p>
        <button className="add-to-cart" onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </main>
  )
}
