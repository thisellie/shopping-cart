import './Shop.css'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Loading from '../components/Loading'

function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.log(error))
  }, [products])

  if (!products.length > 0) {
    return <Loading />
  }

  return (
    <main id="shop">
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </main>
  )
}

export default Shop
