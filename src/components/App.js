import React, { useReducer, useEffect, useState } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer";
import axios from "axios";
import spinner from "../assets/ajax-loader.gif";
//api key e3b27be2

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=e3b27be2";
const favs = JSON.parse(window.localStorage.getItem('favs')) || window.localStorage.setItem('favs', JSON.stringify([]));
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showFavs, setShowFavs] = useState(false);

  useEffect(() => {
    JSON.stringify(state)
  })

  useEffect(() => {
    const queryParams = window.location.search.replace('?', '').split('=') || [];
    const query = queryParams[1] || "";
    if (query === 'favs') {
      setShowFavs(true);
      return dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: favs
      });
    }
    axios.get(MOVIE_API_URL).then(jsonResponse => {
      const movies = jsonResponse.data.Search.map(({ Title, Year, imdbID, Type, Poster }) => {
        return {
          Title,
          Year,
          imdbID,
          Type,
          Poster,
          fav: (favs || []).find(favMovie => favMovie.imdbID === imdbID) !== undefined
        }

      });

      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: movies
      });
    });
  }, []);

  const search = (searchValue, type) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });
    if (searchValue === "") {
      searchValue = "big"
    }
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=e3b27be2&type=${type || ""}`


    axios(url).then(
      jsonResponse => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.data.Error
          });
        }
      }
    );
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const { movies, errorMessage, loading } = state;

  const retrievedMovies =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        );
  return (
    <div >
      <Header showFavs={showFavs} text="Movie Search Application" onClick={refreshPage} />
      {!showFavs && <Search search={search} />}
      <div className="movies">
        {retrievedMovies}</div>
    </div>
  );
};


export default App;
