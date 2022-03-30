import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'



const ListingDetails = (props) => {
  const [selectedListing, setSelectedListing ] = useState('')

  let { id } = useParams()
    const getListing = async () => {
        let res = await axios.get(`http://localhost:3001/listings/${id}`)
        console.log(res.data.listing)
        setSelectedListing(res.data.listing)
    }
  useEffect(() => {
    getListing()
      
    }, [])

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