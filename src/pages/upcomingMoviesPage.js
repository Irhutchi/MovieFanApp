import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);
  const upcoming = movies.filter((u) => u.upcoming);
  // Get movies from local storage.
  const movies = JSON.parse(localStorage.getItem("upcoming")); 

  const upcomingMovies = (movieId) => {
    const updatedMovies = movies.map((u) =>
      u.id === movieId ? { ...u, upcoming: true } : u
    );
    setMovies(updatedMovies);
  };

  useEffect(() => {
    getMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      selectFavorite={upcomingMovies}
    />
  );
};

export default UpcomingMoviesPage;