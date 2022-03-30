import React from 'react'

const ReviewItem = (props) => {
  return (
    <div>
    <p>Rating: {props.rating}</p>
    <p>Comments: {props.comments}</p>
    
    </div>
  )
}

export default ReviewItem