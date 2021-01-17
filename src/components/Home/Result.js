import React from 'react';
import ResultItem from './ResultItem';
import { useStore } from '../../store/StoreProvider';
import { observer } from 'mobx-react-lite';

import { Alert } from 'react-bootstrap';

const LoadingMessage = () => (
  <Alert>Searching...</Alert>
);

const EmptyMessage = () => (
  <Alert>Nothing here</Alert>
);

const ResultMessage = ({input}) => (
  <Alert>Showing results for: "{input}"</Alert>
);

const ErrorMessage = ({message}) => (
  <Alert variant="warning">{message}</Alert>
);

const Result = observer(() => {
  const store = useStore();
  const result = store.search.result;
  const input = store.search.input;
  const loading = store.search.loading;
  const error = store.search.error;

  if (loading) return (
    <LoadingMessage />
  );
  
  if (error) return (
    <>
      {result ? <ResultMessage input={input} /> : null}
      <ErrorMessage message={error} />
    </>
  );

  if (!result) return (
    <EmptyMessage />
  );

  return (
    <>
      <ResultMessage input={input} />
      <ResultItem movie={result} />
    </>
  );
});

export default Result;
