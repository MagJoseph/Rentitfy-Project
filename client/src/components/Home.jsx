import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="home-container">
        <h1>Rentitfy</h1>
        <h3>Find your new home here!</h3>
        <br></br>
        <Link className="list-link" to='/listings'> Browse Listings</Link>
        <br></br>
        <p className="home-p">See something you like? Contact our agent now!</p>
    </div>
  )
}

export default Home