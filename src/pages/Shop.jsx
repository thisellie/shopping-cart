import { useState, useEffect } from 'react'
import './Shop.css'
import Card from '../components/Card'

function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <main id='shop'>
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </main>
    </>
  )
}

export default Shop
