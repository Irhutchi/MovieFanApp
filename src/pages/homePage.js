import React, { useDebugValue } from "react";
import Header from "../components/headerMovieList";
import FilterCard from "../components/filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../components/movieList";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const MovieListPage = (props) => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");

  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=2`
    )
      .then((res) => res.json())
      .then((json) => {
        //log the request in the JSON format to the console.
        //easy to see the structure of the http response from the API.
        console.log(json);
        return json.results;
      })
      //store the API's response in a state variable called movies - created by the useState hook
      .then((movies) => {
        setMovies(movies);
      });
    //The 'eslint' line in the code stops the ESLint tool from reporting a (annoying) warning message.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //FilterMoviesCard is passed a callback function that it invokes whenever the user changes a filtering input.
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Home Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieList movies={displayedMovies} selectFavorite={addToFavorites} />
      </Grid>
    </Grid>
  );
};
export default MovieListPage;
