import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home.'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <main>
       <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/listings" element={ <Listings /> } />
        </Routes>
       </main>
      </header>
    </div>
  );
}

export default App;
