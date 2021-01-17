import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStore } from '../../store/StoreProvider';

import { Card, Button } from 'react-bootstrap';

const ResultItem = ({ movie }) => {
  const store = useStore();
  const history = useHistory();

  const addLike = () => {
    store.favorites.add({
      ...movie,
      id: movie.imdbID
    })
  }

  const handleClick = id => {
    history.push(`/movie/${id}`)
  };

  return (
    <div className="col-auto mb-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img
          className="clickable"
          variant="top" src={movie.Poster}
          onClick={() => handleClick(movie.imdbID)}
        />
        <Card.Body>
          <Card.Title
            className="clickable"
            onClick={() => handleClick(movie.imdbID)}>
            {movie.Title}
          </Card.Title>
          <Card.Text>{movie.Year}</Card.Text>
          <Button variant="outline-primary" block onClick={addLike}>
            Add to favorites
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ResultItem;
