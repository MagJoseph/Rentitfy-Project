import React from 'react'
import { Link } from 'react-router-dom'


const Search = (props) => {
  return (
    <div>
        <h2>Search</h2>
        <form onSubmit={props.getSearchResult}>
       <input
        type="text"
        name="search"
        value={props.searchQuery}
        placeholder="Search Apartments"
        onChange={props.handleChange}
        ></input>
        <button type="submit">Submit</button>
    </form>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default Search