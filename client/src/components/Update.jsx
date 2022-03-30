import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {
    let { id } = useParams()

 const [ city, setCity ] = useState('')   
 const [ neighborhood, setNeighborhood ] = useState('')
 const [ bedrooms, setBedrooms ] = useState('')
 const [ price, setPrice ] = useState('')
 const [imgUrl, setImgUrl ] = useState('')

 
const getListToUpdate = async () => {
   const res = await axios.put('http://localhost:3001/listings/:id', {
     city: city,
     neighborhood: neighborhood,
     bedrooms: bedrooms,
     price: price,
     imgUrl: imgUrl,
    });
}



const handleSubmit= (e) => {
     e.preventDefault()
     getListToUpdate()
}


  return (
    <div>Update
    <form onSubmit={handleSubmit}>
    <input type="text" city="city" onChange={(e)=>{setCity(e.target.value)}}/>
    <input type="text" neighborhood="neighborhood" onChange={(e)=>{setNeighborhood(e.target.value)}}/>
    <input type="text" bedrooms="bedrooms" onChange={(e)=>{setBedrooms(e.target.value)}}/>
    <input type="text" price="price" onChange={(e)=>{setPrice(e.target.value)}}/>
    <input type="text" imgUrl="imgUrl" onChange={(e)=>{setCity(e.target.value)}}/>
    </form>
    <button>Submit</button>
    </div>
  )
}

export default Update


