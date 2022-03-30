import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ListingItem from './ListingItem'
import ListingDetails from './ListingDetails'
import Search from './Search'



const Listings = () => {
   const [ listings, setListings ] = useState([])
   const [ searchResults, setSearchResults ] = useState([])
   const [ searchQuery, setSearchQuery ] = useState('')


   let navigate = useNavigate()
   const showListing = (listings) => {
     navigate(`${listings._id}`)
   }
 
  const getListings = async () =>{
      const list = await axios.get('http://localhost:3001/listings')
      console.log(list.data.listings)
      setListings(list.data.listings)
  } 

useEffect(() => {
   getListings()
}, [])

const getSearchResult = async (e) => {
  e.preventDefault()
  let res = await axios.get(`'http://localhost:3001/listings?&search=${searchQuery}`)
  console.log(res.data.results)
  setSearchResults(res.data.results)
}

const handleChange = (e) => {
  setSearchQuery(e.target.value)
}

return (
    <div>
      <h2>Listings</h2>
      <div>
        {listings.map((listing) => (
          <div className="container" onClick={() => showListing(listing)} key={listing._id}>
          <ListingItem 
           key={listing._id}
           city={listing.city}
           neighborhood={listing.neighborhood}
           bedrooms={listing.bedrooms}
           price={listing.price}
           image={listing.img}
          listings={listings}
       />
       </div>
        ))}
      </div>
      <div>
      <Routes>
      <Route path="/listings/:id" element={ <ListingDetails listings={listings} /> } />
      <Route path="/search" element={ <Search listings={listings} onSubmit={handleChange} 
             searchQuery={searchQuery} getSearchResult={getSearchResult} /> } />
      </Routes>
      </div>
      <Link className="home" to='/'>Home</Link>
    </div>
  )
}

export default Listings