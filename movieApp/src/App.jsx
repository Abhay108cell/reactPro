import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4" >
        <MovieListHeading Heading="Movies"/>

      </div>
      <div className="row">
        <MovieList
        movies={movies}/>
      </div>
    </div>
  )
}

export default App
