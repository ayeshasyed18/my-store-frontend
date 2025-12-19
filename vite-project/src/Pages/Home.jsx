import React from 'react'
import { Link } from 'react-router-dom'; // <--- Yeh line add karein

function Home() {
  return (
   <div className="home-container">
      <div className="hero">
        <h1>Welcome to Our Premium Store</h1>
        <p>Best quality electronics at your doorstep.</p>
        <Link to="/products" className="shop-btn">Shop Now</Link>
      </div>
    </div>
  )
}

export default Home