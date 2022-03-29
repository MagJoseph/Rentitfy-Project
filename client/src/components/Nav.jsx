import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
     <div>
     <Link to="/"> Home </Link>
     <Link to="/listings"> Listings </Link>
     <Link to="/search"> Search </Link>
     <Link to="/postlisting"> Post Listing</Link>
     </div>
    </nav>
  )
}

export default Nav