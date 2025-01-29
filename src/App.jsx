import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <Nav cart={cart.length} />
      <Outlet context={[cart, setCart]} />
    </>
  )
}

export default App

