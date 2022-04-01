import React from 'react'


const ListingItem = (props) => {
  return (
    <div className="list-item">
          <p>City: {props.city}</p>
          <p>Neighborhood: {props.neighborhood}</p>
          <p>Bedrooms: {props.bedrooms}</p>
          <p>Monthly Rent ${props.price}</p>
          <img src={props.image}/>
          <br></br>
   </div>
  )
}

export default ListingItem