import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  getFavoritePokemonList,
  updateFavoritePokemon,
} from '../services/pokedexService';
import {
  About,
  FavoritePokemon,
  NotFound,
  Pokedex,
  PokemonDetails,
} from '../pages';
import pokemonList from '../data';

function PageRoutes() {
  const [favoritePokemonIdsObj, setFavoritePokemonIdsObj] = useState(
    getFavoritePokemonList(),
  );

  const onUpdateFavoritePokemon = (pokemonId: number, isFavorite: boolean) => {
    updateFavoritePokemon(pokemonId, isFavorite);
    setFavoritePokemonIdsObj(getFavoritePokemonList());
  };

  const favoritePokemonList = pokemonList.filter(({ id }) => favoritePokemonIdsObj[id]);
  return (
    <Routes>
      <Route
        path="/"
        element={ (
          <Pokedex
            pokemonList={ pokemonList }
            favoritePokemonIdsObj={ favoritePokemonIdsObj }
          />
        ) }
      />
      <Route
        path="/pokemon/:id"
        element={ (
          <PokemonDetails
            favoritePokemonIdsObj={ favoritePokemonIdsObj }
            pokemonList={ pokemonList }
            onUpdateFavoritePokemon={ onUpdateFavoritePokemon }
          />
        ) }
      />
      <Route
        path="/favorites"
        element={ <FavoritePokemon pokemonList={ favoritePokemonList } /> }
      />
      <Route path="/about" Component={ About } />
      <Route path="*" Component={ NotFound } />
    </Routes>
  );
}

export default PageRoutes;
