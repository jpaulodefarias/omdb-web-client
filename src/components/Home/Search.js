import React, { useState } from 'react';
import { useStore } from '../../store/StoreProvider';
import { searchByTitle } from '../../services/searchService';

import { Form, FormControl, Button } from 'react-bootstrap';

const Search = () => {
  const [text, setText] = useState("");
  const store = useStore();

  const handleReset = () => {
    store.search.reset();
  };

  const handleSearch = async e => {
    e.preventDefault();

    if (text) {
      try {
        store.search.reset();
        store.search.setInput(text);
        store.search.setLoading(true);
        const response = await searchByTitle(text);
        const result = response.data;
        if (result.Error) store.search.setError(result.Error);
        store.search.setResult(result);
      } catch (error) {
        console.error(error);
        store.search.setError('Failed to search');
      } finally {
        store.search.setLoading(false);
        setText("");
      }
    } else {
      handleReset();
    }
  }

  return (
    <div className="col-auto mb-3">
      <Form inline>
        <FormControl
          type="text" placeholder="Title"
          className="mr-sm-2"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Button variant="outline-primary"
          type="submit"
          onClick={handleSearch}>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default Search;
