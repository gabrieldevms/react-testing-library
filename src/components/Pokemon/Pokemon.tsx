import { Link } from 'react-router-dom';

import { PokemonType } from '../../types';

import './pokemon.css';

type PokemonProps = {
  pokemon: PokemonType,
  showDetailsLink: boolean,
  isFavorite: boolean
};

function Pokemon(props: PokemonProps) {
  const { isFavorite, showDetailsLink, pokemon } = props;
  const { averageWeight, id, image, name, type } = pokemon;
  const { measurementUnit, value } = averageWeight;

  return (
    <div className="pokemon">
      <div className="pokemon-overview">
        <div className='pokemon-name'>
          <p data-testid="pokemon-name" >
            {`${name}`}
          </p>

          {isFavorite && (
            <img
              className="favorite-icon"
              src="/star-icon.png"
              alt={`${name} is marked as favorite`}
            />
          )}
        </div>
        <p data-testid="pokemon-type">{`${type}`}</p>
        <p data-testid="pokemon-weight" className="pokemon-weight">
          {`Average weight: ${value} ${measurementUnit}`}
        </p>
      </div>
      <div>
        <img className="pokemon-image" src={`${image}`} alt={`${name} sprite`} />
        {showDetailsLink && <Link to={`/pokemon/${id}`}>More details</Link>}
      </div>
    </div>
  );
}

export default Pokemon;
