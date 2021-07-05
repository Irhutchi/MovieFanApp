import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';
import AddToMustWatchIcon from "../components/cardIcons/addToWatchList";

const UpcomingMoviesPage = (props) => {
 
  // useQuery uses the 2nd arg to perform HTTP, 1st arg is used as the cache entry key
    const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)
  
    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const movies = data.results;
  
    // Redundant, but necessary to avoid app crashing.
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  
    return (
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return <AddToMustWatchIcon movie={movie} />
        }}
      />    
    );
  };
  
  export default UpcomingMoviesPage;