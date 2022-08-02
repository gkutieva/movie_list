import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched'
import { Add } from './components/Add';
import './App.css';


function App() {
  return (
    <Router>
        <Header />
        <Routes>
           <Route path='/' element={<Watchlist />}>
           </Route>
           <Route path='/watched' element={<Watched />}>
           </Route>
          <Route path='/add' element={<Add />}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
