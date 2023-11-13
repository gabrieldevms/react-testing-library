import pokemonList from '../data';
import { FavoritePokemonIdsObjType, PokemonType } from '../types';

const readFavoritePokemonIds = () => (
  JSON.parse(localStorage.getItem('favoritePokemonIds') || '[]')
);

const saveFavoritePokemon = (favoritesList: PokemonType[]) => (
  localStorage.setItem('favoritePokemonIds', JSON.stringify(favoritesList))
);

const addPokemonToFavorites = (pokemonId: number) => {
  const favoritePokemon = readFavoritePokemonIds();
  const newFavoritePokemon = [...favoritePokemon, pokemonId];

  saveFavoritePokemon(newFavoritePokemon);
  return newFavoritePokemon;
};

const removePokemonFromFavorites = (pokemonId: number) => {
  const favoritePokemon = readFavoritePokemonIds();
  const newFavoritePokemon = favoritePokemon.filter((id: number) => id !== pokemonId);

  saveFavoritePokemon(newFavoritePokemon);
  return newFavoritePokemon;
};

export const updateFavoritePokemon = (pokemonId: number, isFavorite: boolean) => (
  isFavorite ? addPokemonToFavorites(pokemonId) : removePokemonFromFavorites(pokemonId)
);

export const getFavoritePokemonList = () => {
  const favoritePokemonIds = readFavoritePokemonIds();
  const isPokemonFavorite = pokemonList.reduce((acc, pokemon) => {
    acc[pokemon.id] = favoritePokemonIds.includes(pokemon.id);
    return acc;
  }, {} as FavoritePokemonIdsObjType);

  return isPokemonFavorite;
};
