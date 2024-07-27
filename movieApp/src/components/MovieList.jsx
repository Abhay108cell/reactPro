import React from "react";
import AddFavourite from "./AddFavourite";

const MovieList = (props) =>{
  const FavouriteComponent = props.FavouriteComponent;
  return(
    <>
    {props.movies.map((movie, index)=>(
      <div className="image-container d-flex justify-content-start m3">
        <img src={movie.Poster} alt="movie" ></img>
        <div
          onClick = {()=>props.handleFavouritesClick(movie)}
          className= "overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent/>
        </div>
      </div>
    ))}
    </>
  )
}

export default MovieList;