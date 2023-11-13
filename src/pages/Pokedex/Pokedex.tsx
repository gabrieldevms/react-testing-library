import { useState } from 'react';

import { FavoritePokemonIdsObjType, PokemonType } from '../../types';
import {
  Button,
  Pokemon,
  PokemonButtonsPanel,
} from '../../components';

import './pokedex.css';

const getPokemonTypes = (pokemonList: PokemonType[]) => {
  const pokemonTypes = pokemonList.reduce((types, { type }) => [...types, type], [] as string[])
  
  return [...new Set(pokemonTypes)];
};

const filterPokemonByType = (pokemonList: PokemonType[], filteredType: string) => (
  pokemonList.filter((pokemon) => {
    if (filteredType === 'all') return true;
    return pokemon.type === filteredType;
  })
);

type PokedexProps = {
  pokemonList: PokemonType[],
  favoritePokemonIdsObj: FavoritePokemonIdsObjType,
}

function Pokedex(props: PokedexProps) {
  const { pokemonList, favoritePokemonIdsObj } = props;
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const [filteredType, setFilteredType] = useState('all');

  const filteredPokemon = filterPokemonByType(pokemonList, filteredType);

  const pokemonTypes = getPokemonTypes(pokemonList);

  const selectedPokemon = filteredPokemon[pokemonIndex];

  const filterPokemon = (type: string) => {
    setFilteredType(type);
    setPokemonIndex(0);
  };

  const nextPokemon = () => {
    setPokemonIndex((pokemonIndex + 1) % filteredPokemon.length);
    // esse código permite que o index do pokemon seja resetado para 0
    // quando o index for igual ao tamanho do array
  };

  return (
    <div className="pokedex">
      <h2>{`Encountered Pokémon`}</h2>
      <div className='content-container'>
        <div>
          <Pokemon
            pokemon={ selectedPokemon }
            showDetailsLink={ true }
            isFavorite={ favoritePokemonIdsObj[selectedPokemon.id] }
          />
          <Button
            dataTestId="next-pokemon"
            className="pokedex-button"
            onClick={ () => nextPokemon() }
            disabled={ filteredPokemon.length <= 1 }
          >
            {`Próximo Pokémon`}
          </Button>
        </div>
        <PokemonButtonsPanel
          pokemonTypes={ pokemonTypes }
          filterPokemon={ (type: string) => filterPokemon(type) }
        />
      </div>
    </div>
  );
}

export default Pokedex;
