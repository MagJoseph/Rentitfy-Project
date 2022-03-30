import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Rentitfy</h1>
        <h3>Find your new home here!</h3>
        <Link to="/listings"><div className="browse"> Browse Listings</div> </Link>
        <p>See something you like? Contact our agent now!</p>
    </div>
  )
}

export default Home