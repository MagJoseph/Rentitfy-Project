import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'



const ListingDetails = (props) => {
  const [selectedListing, setSelectedListing ] = useState('')

  let { id } = useParams()

  useEffect(() => {
      let currentListing = props.listings.find((listing) => listing._id === parseInt(id))
       setSelectedListing(currentListing)
      
    }, [props.listing.id])

  return  selectedListing ?(
    <div>
    <div>
       <p>City: {selectedListing.city}</p>
      <p>Neighborhood: {selectedListing.neighborhood}</p>
      <p>Bedrooms: {selectedListing.bedrooms}</p>
      <p>Monthly Rent ${selectedListing.price}</p>
      <br></br>
      <img src={selectedListing.image}/>
      </div>
      <Link to="/reviews">Click here for comments and reviews</Link>
      </div>
  ) : null;
  
}


export default ListingDetails