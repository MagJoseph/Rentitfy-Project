import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState} from 'react'


const Search = () => {

  const [ searchResults, setSearchResults ] = useState([])
  const [ searchQuery, setSearchQuery ] = useState('')
   
  const getSearchResult = async (e) => {
    e.preventDefault()
    let res = await axios.get(`http://localhost:3001/listings?&search=${searchQuery}`)
    console.log(res.data.results)
    setSearchResults(res.data.results)
  }
  
  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
        <h2>Search</h2>
        <h3>Type in Neighborhood you're interested in</h3>
        <form onSubmit={getSearchResult}>
       <input
        type="text"
        name="search"
        value={searchQuery}
        placeholder="Search Apartments"
        onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
    </form>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default Search