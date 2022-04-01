import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const PostListings = () => {

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
      // headers: {
      //   'content-type': 'multipart/form-data'
      // },
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