import { useEffect, useState } from "react";
import { getMovie } from "../api/tmdb-api";

//We are not declaring a component here, just a function.
const useMovie = id => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        getMovie(id).then(movie => {
            setMovie(movie);
        });
    }, [id]);
    return [movie, setMovie];
};

export default useMovie