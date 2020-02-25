import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import MovieCard from "./MovieCard";

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const  { id } = useParams();
  
  useEffect(() => {
       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <MovieCard card = {movie}/>
      <button onClick = {saveMovie} className = "save-button">Save</button>
      </div>
  );
}

export default Movie;
