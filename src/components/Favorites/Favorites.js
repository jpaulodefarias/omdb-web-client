import React from 'react';
import { useStore } from '../../store/StoreProvider';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import { Alert, Button, Card, CardGroup } from 'react-bootstrap';

const EmptyMessage = () => (
  <Alert>Nothing here</Alert>
);

const List = observer(() => {
  const store = useStore();
  const history = useHistory();

  const removeLike = movie => {
    store.favorites.remove({
      ...movie,
      id: movie.imdbID
    })
  }

  const handleClick = id => {
    history.push(`/movie/${id}`);
  };

  if (!store.favorites.movies.length) {
    return <EmptyMessage />;
  }

  return (
    <CardGroup>
      {store.favorites.movies.map(movie => (
        <div key={movie.id} className="col-auto mb-3">
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
              <Button variant="outline-danger" block onClick={() => removeLike(movie)}>
                Remove from favorites
          </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </CardGroup>
  );
});

const Favorites = () => (
  <>
    <List />
  </>
);

export default Favorites;
