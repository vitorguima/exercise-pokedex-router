import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <nav>
      <span className="nav-item">
        <Link to="/">Home</Link>
      </span>
      <span className="nav-item">
        <Link to="/About">About</Link>
      </span>
      </nav>
      <Switch>
        <Route exact path="/" render={() => <Pokedex pokemons={ pokemons } />} />
        <Route path="/pokemon-details/:pokemonId" render={(props) => <PokemonDetails { ...props } pokemons={ pokemons }/>} />
        <Route path="/About" component={About} />
        <Route path="/NotFound" component={NotFound} />
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
    </div>
  );
}

export default App;
