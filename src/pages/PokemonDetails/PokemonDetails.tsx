import { useParams } from 'react-router-dom';

import { FavoritePokemonIdsObjType, PokemonType } from '../../types';
import Pokemon from '../../components/Pokemon/Pokemon';
import PokemonData from '../../components/PokemonData/PokemonData';
import FavoriteInput from '../../components/FavoriteInput/FavoriteInput';

import './pokemon-details.css';

type PokemonDetailsProps = {
  favoritePokemonIdsObj: FavoritePokemonIdsObjType,
  onUpdateFavoritePokemon: (pokemonId: number, isFavorite: boolean) => void,
  pokemonList: PokemonType[],
};

function PokemonDetails(props: PokemonDetailsProps) {
  const {
    favoritePokemonIdsObj,
    onUpdateFavoritePokemon,
    pokemonList,
  } = props;
  const { id: idParam } = useParams();
  const pokemon = pokemonList.find(
    ({ id }) => id === parseInt(idParam as string, 10),
  ) as PokemonType;
  const isFavorite = favoritePokemonIdsObj[parseInt(idParam as string)];

  return (
    <section className="pokemon-details">
      <h2>{ `${pokemon.name} Details` }</h2>
      <div className='details-container'>
        <div className="card">
          <Pokemon
            pokemon={ pokemon }
            showDetailsLink={ false }
            isFavorite={ isFavorite }
          />
          <FavoriteInput
            isFavorite={ isFavorite }
            onUpdateFavoritePokemon={
              (checked) => onUpdateFavoritePokemon(pokemon.id, checked)
            }
          />
        </div>
        <PokemonData pokemon={ pokemon } />
      </div>
    </section>
  );
}

export default PokemonDetails;
