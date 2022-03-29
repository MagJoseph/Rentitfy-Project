import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Listings = () => {
    const [ listings, setListings ] = useState([])
 
  const getListings = async () =>{
      const list = await axios.get('http://localhost:3001/listings')
      console.log(list.data)
      setListings(list.data)
  } 

useEffect(() => {
   getListings()
}, [])


  return (
    <div>
      <h2>
      Listings
      </h2>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Listings