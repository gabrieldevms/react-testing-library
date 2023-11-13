import Button from '../Button/Button';

import './pokemon-buttons-panel.css';

type PokemonButtonsPanelProps = {
  pokemonTypes: string[],
  filterPokemon: (a: string) => void,
}

function PokemonButtonsPanel(props: PokemonButtonsPanelProps) {
  const { pokemonTypes, filterPokemon } = props;

  return (
    <div className="pokedex-buttons-panel">
      <Button
        onClick={ () => filterPokemon('all') }
        className="filter-button"
      >
        All
      </Button>
      {pokemonTypes.map((type) => (
        <Button
          dataTestId={ `pokemon-type-button` }
          key={ type }
          onClick={ () => filterPokemon(type) }
          className="filter-button"
        >
          {`${type}`}
        </Button>
      ))}
    </div>
  );
}

export default PokemonButtonsPanel;
