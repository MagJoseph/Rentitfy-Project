import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PostListings = () => {

  let navigate = useNavigate()

  const [ newList, setNewListing ] = useState({
      city: '',
      neighborhood: '',
      bedrooms: '',
      price: '',
      img: '',
      reviews_id: []
   })

  const getNewListing = async () => {
      console.log(newList)
       await axios({
      url: 'http://localhost:3001/listings',
      method: 'post',
      data: newList
    })
   }
    
  const handleChange = (e) => {
    setNewListing({...newList, [e.target.name]: e.target.value })
    console.log(e.target.name)
    console.log(e.target.value)
    console.log(newList)
  }
  
  const handleSubmit= () => {
       getNewListing()
       navigate('/listings')
       window.location.reload(false)
  }
  
return (
    <div>
         <h2>Add A New Listing</h2>
    <form className="submit-form" onSubmit={handleSubmit}> 
         <input type="text" value={newList.city} onChange={handleChange} name={'city'} placeholder={'city'} />
         <input type="text" value={newList.neighborhood} onChange={handleChange} name={'neighborhood'} placeholder={'neighborhood'} />
         <input type="text" value={newList.img} onChange={ handleChange} name={'img'} placeholder={'image'} />
         <input type="text" value={newList.price} onChange={ handleChange} name={'price'} placeholder={'price'} />
         <input type="text" value={newList.bedrooms} onChange={ handleChange} name={'bedrooms'} placeholder={'bedrooms'} />
         <button>Submit</button>
    </form>
    </div>
  )
}

export default PostListings