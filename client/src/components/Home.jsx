import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="home-container">
        <h1>Rentitfy</h1>
        <Link className="list-link" to='/listings'> Browse Listings</Link>
        <Link className="home-p" to="/contact">See something you like? Contact our agent now!</Link>
    </div>
  )
}

export default Home