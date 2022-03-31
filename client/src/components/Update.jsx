import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = (props) => {
    let { id } = useParams()

 const [ city, setCity ] = useState('')   
 const [ neighborhood, setNeighborhood ] = useState('')
 const [ bedrooms, setBedrooms ] = useState('')
 const [ price, setPrice ] = useState('')
 const [ img, setImgUrl ] = useState('')
 

 
const getListToUpdate = async () => {
     await axios.put(`http://localhost:3001/listings/${id}`, {
     city: city,
     neighborhood: neighborhood,
     bedrooms: bedrooms,
     price: price,
     img: img,
     reviews_id: props.reviews_id
    });
}



const handleSubmit= (e) => {
     e.preventDefault()
     getListToUpdate()
}


  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" city="city" onChange={(e)=>{setCity(e.target.value)}} placeholder="city"/>
    <input type="text" neighborhood="neighborhood" onChange={(e)=>{setNeighborhood(e.target.value)}} placeholder="neighborhood"/>
    <input type="text" bedrooms="bedrooms" onChange={(e)=>{setBedrooms(e.target.value)}}  placeholder="bedrooms"/>
    <input type="text" price="price" onChange={(e)=>{setPrice(e.target.value)}}  placeholder="price"/>
    <input type="text" img="img" onChange={(e)=>{setImgUrl(e.target.value)}}  placeholder="imgUrl"/>
    <button>Submit</button>
    </form>
    
    </div>
  )
}

export default Update


