import React, { createContext, useContext } from 'react';
import { createSearchStore } from './searchStoreCreator';
import { createFavoritesStore } from './favoritesStoreCreator';
import { useLocalObservable } from 'mobx-react-lite';

const Context = createContext();

export const StoreProvider = ({ children }) => {
  const searchStore = useLocalObservable(createSearchStore); 
  const favoritesStore = useLocalObservable(createFavoritesStore);
  
  const store = {
    search: searchStore,
    favorites: favoritesStore
  };

  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  );
};

export const useStore = () => useContext(Context);
