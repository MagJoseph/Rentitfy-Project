import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ListingItem from './ListingItem'
import PostListings from './PostListings'


const Listings = () => {
    const [ listings, setListings ] = useState([])
 
  const getListings = async () =>{
      const list = await axios.get('http://localhost:3001/listings')
      console.log(list.data.listings)
      setListings(list.data.listings)
  } 

useEffect(() => {
   getListings()
}, [])

return (
    <div>
      <h2>Listings</h2>
      <div>
        {listings.map((listing) => (
          <ListingItem 
           key={listing._id}
           city={listing.city}
           neighborhood={listing.neighborhood}
           bedrooms={listing.bedrooms}
           price={listing.price}
           image={listing.img}
          listings={listings}
       />
        ))}
      </div>
      <div>
      
      </div>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Listings