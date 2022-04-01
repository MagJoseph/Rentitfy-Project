import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Delete from './Delete'
import Update from './Update'


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
        <div className="list-details">
             <p>City: {selectedListing.city}</p>
             <p>Neighborhood: {selectedListing.neighborhood}</p>
             <p>Bedrooms: {selectedListing.bedrooms}</p>
             <p>Monthly Rent: ${selectedListing.price}</p>
             <br></br>
             <img src={selectedListing.img}/>
         </div>
             <Link className="add-rev" to={`/listings/${selectedListing._id}/reviews`}>Add a comment and a review here</Link>
              <br></br>
         <div>  
             <Delete />   
         </div>
             <Update reviews={selectedListing.reviews_id}/>  
         </div>
  ) : null;
  
}

export default ListingDetails