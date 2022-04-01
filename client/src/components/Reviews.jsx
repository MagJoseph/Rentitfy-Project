import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ReviewItem from './ReviewItem'
import { useParams } from 'react-router-dom'


const Reviews = () => {
 //updated to true track it in useEffect
 
 const [reviews, setReviews] = useState([])   
 const [newReview, setNewReview ] = useState({
     rating: '',
     comments: ''
 })
 let { id } = useParams()

 const getReviews = async () =>{
    const rev = await axios.get('http://localhost:3001/reviews')
    setReviews(rev.data.reviews)
   
} 

useEffect(() => {
 getReviews()
}, [reviews])

 const getNewReview = async () => {
    console.log(newReview)
     await axios({
    url: `http://localhost:3001/reviews/${id}`,
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
  
  const handleSubmit= (e) => {
     e.preventDefault()
       getNewReview()
  }

 return (
    <div>
        <h2>Reviews and Comments</h2>
        <form className="submit-form" onSubmit={handleSubmit}> 
             <input type="text" value={newReview.rating} onChange={handleChange} 
                     name={'rating'} placeholder={'Rate 1-5'} />
             <input type="text" value={newReview.comments} onChange={handleChange} 
                     name={'comments'} placeholder={'Leave a comment'} />
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