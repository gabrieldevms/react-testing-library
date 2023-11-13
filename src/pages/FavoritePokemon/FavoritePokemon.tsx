import { PokemonType } from '../../types';

import './favorite-pokemon.css';
import { Pokemon } from '../../components';

type FavoritePokemonProps = { pokemonList: PokemonType[] };

function FavoritePokemon(props: FavoritePokemonProps) {
  const { pokemonList } = props;
  const isEmpty = pokemonList.length === 0;

  return (
    <div className='favorite-pokemon'>
      <h2>Favorite Pokémon</h2>
      <div className="favorite-container">
        {isEmpty ? (
          <p>{`No favorite Pokémon found`}</p>
        ) : (
          pokemonList.map((pokemon) => (
            <div key={pokemon.id}>
              <Pokemon
                pokemon={pokemon}
                showDetailsLink={true}
                isFavorite
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

FavoritePokemon.defaultProps = {
  pokemonList: [],
};

export default FavoritePokemon;
