import React from 'react';

const MovieCard = ({card}) => {
    return (
    <div className="movie-card">
      <h2>{card.title}</h2>
      <div className="movie-director">
        Director: <em>{card.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{card.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {card.stars.map(star => (
        <div key={card.star} className="movie-star">
          {card.star}
        </div>
      ))}
    </div>
    );
}

export default MovieCard;
