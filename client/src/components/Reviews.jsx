import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ReviewItem from './ReviewItem'
import { useNavigate } from 'react-router-dom'

const Reviews = () => {

 const [reviews, setReviews] = useState([])   
 const [newReview, setNewReview ] = useState({
     rating: '',
     comments: ''
 })

 const getReviews = async () =>{
    const rev = await axios.get('http://localhost:3001/reviews')
    console.log(rev.data.reviews)
    setReviews(rev.data.reviews)
} 

useEffect(() => {
 getReviews()
}, [])

 const getNewReview = async () => {
    console.log(newReview)
     await axios({
    url: 'http://localhost:3001/listings/:id',
    method: 'post',
    // headers: {
    //   'content-type': 'multipart/form-data'
    // },
    data: newReview
  })
 }


 const handleChange = (e) => {
    setNewReview({...newReview, [e.target.name]: e.target.value })
    console.log(e.target.name)
    console.log(e.target.value)
  
  }
  
  const handleSubmit= () => {
       getNewReview()
  }


  return (
    <div>
        <h2>Reviews and Comments</h2>
        <form className="submit-form" onSubmit={handleSubmit}> 
      <input type="text" value={newReview.rating} onChange={handleChange} name={'rating'} placeholder={'rating'} />
      <input type="text" value={newReview.comments} onChange={handleChange} name={'comments'} placeholder={'neighborhood'} />
      <button>Submit</button>
    </form>
        <div>
            {reviews.map((review) => (
            <ReviewItem
               key={review._id}
               rating={review.rating}
               comments={review.comments}
               reviews={reviews}
             />
            ))}
        </div>
   
    </div>
  )
}

export default Reviews