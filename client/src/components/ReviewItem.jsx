import React from 'react'

const ReviewItem = (props) => {
  return (
    <div className="rev-item">
    <p>Rating: {props.rating}</p>
    <p>Comments: {props.comments}</p>
    
    </div>
  )
}

export default ReviewItem