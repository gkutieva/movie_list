import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched'
import { Add } from './components/Add';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Watchlist />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
