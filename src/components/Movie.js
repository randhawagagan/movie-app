import React, { useState } from "react";
import DefaultPoster from '../defaultposter.png'
import '../App.css'
let favs = JSON.parse(window.localStorage.getItem('favs')) || [];

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DefaultPoster : movie.Poster;
  const [fav, setFav] = useState(movie.fav);
  const onFavouriteClicked = () => {
    const currentFav = !fav;
    setFav(currentFav)
    // add this id to localStorage favs array 
    currentFav ? favs.push(movie) : favs = favs.filter(mov => movie.imdbID !== mov.imdbID);
    window.localStorage.setItem('favs', JSON.stringify(favs))
  }
  const textFav = fav ? 'FAV' : 'NOTFAV';

  return (
    <div
      className="cardContainer">
      <div className="movie">
        <h2>{movie.Title}</h2>
        <button type="button" onClick={onFavouriteClicked}>{textFav}</button>
        <div>
          <img
            width="100%"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
        </div>
        <p>({movie.Year})</p>
      </div>
    </div>
  );
};


export default Movie;