import { useOutletContext, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
    return <p>Loading...</p>
  }

  return (
    <main>
      <div className='product'>
        <img className='image' src={product.image} alt={product.title} />
        <h1 className='title'>{product.title}</h1>
        <h2 className='price'>{product.price}</h2>
        <p className='description'>{product.description}</p>
        <p className='category'>{product.category}</p>
        <p className='rate'>{product.rating.rate}</p>
        <p className='count'>{product.rating.count}</p>
        <button onClick={() => addToCart(product)}>Add To Cart</button>
      </div>
    </main>
  )
}
