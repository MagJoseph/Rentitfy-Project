import React from 'react'
import { useNavigate } from 'react-router-dom'

const PostListing = () => {
    let navigate = useNavigate()
    
    const handleSubmit = (e) => {
      props.addListing(e)
      navigate('/listings')
    }
    
    const newListing = props.newListing

    return (
    <div>
    <h1>Post a Listing</h1>
    <form onSubmit={ handleSubmit }>
      <input type="text" value={newListing.neighborhood} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
      <input type="text" value={newListing.price} onChange={ props.handleChange} name={'price'} placeholder={'price'} />
      <input type="text" value={newListing.img} onChange={ props.handleChange} name={'img'} placeholder={'image'} />
      <input type="text-area" value={newListing.description} onChange={ props.handleChange} name={'description'} placeholder={'description'} />
      <input type="text" value={newListing.Bedrooms} onChange={ props.handleChange} name={'price'} placeholder={'Bedrooms'} />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default PostListing