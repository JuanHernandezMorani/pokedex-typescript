import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Items, Pokemons, Pokemon, NotFound, Location } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/' element={<Pokemons/>}/>
          <Route path='/pokedex' element={<Pokemons/>}/>
          <Route path='/items' element={<Items/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/pokedex/:name' element={<Pokemon/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;