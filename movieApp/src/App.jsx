import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/MovieListHeading';
import AddFavourite from './components/AddFavourite';
import RemoveFavourites from './components/RemoveFavourites';


function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  const getMovieRequest = async(searchValue)=>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=3a1fba89`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if(responseJson.Search){
      setMovies(responseJson.Search);
      }
  }

  
  useEffect(()=>{
    getMovieRequest(searchValue);
    },[searchValue]);

    const saveToLocalStorage = (item)=>{
      localStorage.setItem("react-movie-app-favourites", JSON.stringify(item))
    }

    const AddFavouriteMovie = (movie)=>{
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
      }

      const removeFavouriteMovie=(movie)=>{
          const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
          )
          setFavourites(newFavouriteList);
          saveToLocalStorage(newFavouriteList);
      }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4" >
        <MovieListHeading heading="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>

      </div>
      <div className="row">
        <MovieList
        movies={movies}
        handleFavouritesClick={AddFavouriteMovie}
        FavouriteComponent={AddFavourite}
        />
      </div>
      <div className="row d-flex align-items-centre mt-4 mb-4">
        <MovieListHeading heading="Favourites"/>
      </div>
      <div className="row">
        <MovieList
        movies={favourites}
        handleFavouritesClick={removeFavouriteMovie}
        FavouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  )
}

export default App
