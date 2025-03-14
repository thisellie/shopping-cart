import { useOutletContext, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Product.css'
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

  function addToCart(product) {
    setCart([...cart, product])
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
    <main id='product'>
      <img className='image' src={product.image} alt={product.title} />
      <div className='product-details'>
        <h1 className='title'>{product.title}</h1>
        <p className='rate'>{getStars(product.rating.rate)}</p>
        <h2 className='price'>${product.price}</h2>
        <p className='description'>{product.description}</p>
        {/* <p className='category'>{product.category}</p> */}
        <p className='count'>
          <b>Quantity: </b>
          {product.rating.count}
        </p>
        <button onClick={() => addToCart(product)}>Add To Cart</button>
      </div>
    </main>
  )
}
