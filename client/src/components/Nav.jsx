import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
     <div>
     <Link to="/">Home</Link>
     <Link to="/listings">Listings</Link>
     </div>
    </nav>
  )
}

export default Nav