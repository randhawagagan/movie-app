import React, { useReducer, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer";
import axios from "axios";
import spinner from "../assets/ajax-loader.gif";
//api key e3b27be2

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=e3b27be2"; // you should replace this with yours


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(MOVIE_API_URL).then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search
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
    const url = type !== undefined ? `https://www.omdbapi.com/?s=${searchValue}&apikey=e3b27be2&type=${type}` : `https://www.omdbapi.com/?s=${searchValue}&apikey=e3b27be2`


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
      <Header text="Movie Search Application" onClick={refreshPage} />
      <Search search={search} />
      <div className="movies">
        {retrievedMovies}</div>
    </div>
  );
};


export default App;
