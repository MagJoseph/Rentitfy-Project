import React from 'react'

const ListingItem = (props) => {
  return (
    <div>
      <p>City: {props.listing.city}</p>
      <p>Neighborhood: {props.listing.neighborhood}</p>
      <p>Bedrooms: {props.listing.bedrooms}</p>
      <img src={props.listing.image}/>
    </div>
  )
}

export default ListingItem