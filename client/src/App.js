import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home';
import Listings from './components/Listings';
import PostListings from './components/PostListings';
import Search from './components/Search';

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
        <Route path="/postlisting" element={ <PostListings /> } />
        <Route path="/search" element={ <Search /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;

//router dom and axios
//npm i react-router-dom

