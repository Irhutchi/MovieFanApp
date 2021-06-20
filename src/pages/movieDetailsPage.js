<<<<<<< HEAD
import React from "react";
import { withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie";

const MovieDetailsPage = (props) => {
  //comnst id allows the component to extract the movie id from the browser's parameterized URL address
  const { id } = props.match.params;
  const [movie] = useMovie(id);

=======
import React, { useState, useEffect } from "react";
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from "../api/tmdb-api";
import { withRouter } from "react-router-dom";


const MovieDetailsPage = (props) => {
  //comnst id allows the component to extract the movie id from the browser's parameterized URL address
  const { id } = props.match.params;
  const [movie, setMovie] = useState(null);
  //movie state variable is initialized to null (boolean false) 
  //but it is eventually assigned to an object (boolean true)

  //uses the API's movie endpoint to get the full details on the movie
  useEffect(() => {
    getMovie(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  //In the below  code the children prop will be bound to: <MovieDetails movie={movie} />
>>>>>>> review-feature
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(MovieDetailsPage);
<<<<<<< HEAD


=======
>>>>>>> review-feature
