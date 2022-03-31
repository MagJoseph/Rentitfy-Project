import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home';
import Listings from './components/Listings';
import PostListings from './components/PostListings';
import Reviews from './components/Reviews';
import ListingDetails from './components/ListingDetails';
import Search from './components/Search';
import Update from './components/Update';
import Contact from './components/Contact';




function App() {


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
        <Route path="/listings/:id/reviews" element={ <Reviews /> } />
        <Route path="/listings/:id" element={ <ListingDetails /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="contact" element={ <Contact /> } />
        </Routes>
       </main>
    
    </div>
  );
}

export default App;



