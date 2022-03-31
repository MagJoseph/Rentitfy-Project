import React from 'react'
import { Link } from 'react-router-dom'


const Search = (props) => {
  return (
    <div>
        <h2>Search</h2>
        <h3>Type in Neighborhood you're interested in</h3>
        <form onSubmit={props.getSearchResult}>
       <input
        type="text"
        name="search"
        value={props.searchQuery}
        placeholder="Search Apartments"
        onChange={props.handleChange}
        ></input>
        <button type="submit">Search</button>
    </form>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default Search