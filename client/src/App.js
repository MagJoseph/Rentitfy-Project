import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import Home from './components/Home';
import Listings from './components/Listings';
import PostListings from './components/PostListings';
import Reviews from './components/Reviews';
import ListingDetails from './components/ListingDetails';
import Search from './components/Search';
import ListingItem from './components/ListingItem';


function App() {

  const [ listings, setListings ] = useState([])
  const [ searchResults, setSearchResults ] = useState([])
  const [ searchQuery, setSearchQuery ] = useState('')


  let navigate = useNavigate()
  const showListing = (listings) => {
    navigate(`${listings._id}`)
  }

 const getListings = async () =>{
     const list = await axios.get('http://localhost:3001/listings')
     console.log(list.data.listings)
     setListings(list.data.listings)
 } 

useEffect(() => {
  getListings()
}, [])

const getSearchResult = async (e) => {
 e.preventDefault()
 let res = await axios.get(`'http://localhost:3001/listings?&search=${searchQuery}`)
 console.log(res.data.results)
 setSearchResults(res.data.results)
}

const handleChange = (e) => {
 setSearchQuery(e.target.value)
}

   return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/listings" element={ <Listings /> } />
        <Route path="/postlistings" element={ <PostListings /> } />
       <Route path="/reviews" element={ <Reviews /> } />
       <Route path="/listings/:id" element={ <ListingDetails listings={listings} /> } />
      <Route path="/search" element={ <Search listings={listings} onSubmit={handleChange} 
             searchQuery={searchQuery} getSearchResult={getSearchResult} /> } />
          
      </Routes>
        </main>
        <h2>Listings</h2>
        <div>
        {listings.map((listing) => (
          
          <div className="container" key={listing._id}>
          <Link to={`/listings/${listing._id}`}>
          <ListingItem 
           key={listing._id}
           city={listing.city}
           neighborhood={listing.neighborhood}
           bedrooms={listing.bedrooms}
           price={listing.price}
           image={listing.img}
          listings={listings}
       />
       </Link>
       </div>
     
        ))}
      </div>
    </div>
  );
}

export default App;

//router dom and axios
//npm i react-router-dom

