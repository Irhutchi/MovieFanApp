import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddSharpIcon from '@material-ui/icons/PlaylistAddSharp';

const AddToMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie);
  };
  
  return (
    <IconButton 
      aria-label="add to must-watch" 
      onClick={handleAddToMustWatch}
    >
      <PlaylistAddSharpIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchIcon;