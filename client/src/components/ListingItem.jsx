import React from 'react'
import { Link } from 'react-router-dom'

const ListingItem = (props) => {
  return (
    <div>
      <p>City: {props.city}</p>
      <p>Neighborhood: {props.neighborhood}</p>
      <p>Bedrooms: {props.bedrooms}</p>
      <p>Monthly Rent ${props.price}</p>
      <br></br>
      <br></br>
      <img src={props.image}/>
      
      
    </div>
  )
}

export default ListingItem