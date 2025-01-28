import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import './Shop.css'
import Card from '../components/Card'

function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.log(error))
  }, [products])

  function addToCart(product) {
    console.log(product)
  }

  return (
    <>
      <Nav />
      <div>
        {products.map(product => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </>
  )
}

export default Shop
