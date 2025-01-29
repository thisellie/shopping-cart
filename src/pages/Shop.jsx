import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import './Shop.css'
import Card from '../components/Card'

function Shop() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useOutletContext()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.log(error))
  }, [])

  function addToCart(product) {
    setCart([...cart, product])
  }

  return (
    <>
      <main>
        {products.map(product => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </main>
    </>
  )
}

export default Shop
