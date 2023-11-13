import { PokemonType } from '../../types';

import './pokemon-data.css';

type PokemonDataProps = { pokemon: PokemonType }

function PokemonData({ pokemon } : PokemonDataProps ) {
  const { summary, foundAt, name } = pokemon;

  return (
    <>
      <section className='summary-container'>
        <h2>{ `Summary` }</h2>
        <p>{ `${summary}` }</p>
      </section>
      <section className='locations-container'>
        <h2>{ `Game Locations of ${name}` }</h2>
        <div className="pokemon-habitat">
          { foundAt.map(({ location, map }) => (
            <div key={ location } className='card-map'>
              <img
                src={ `${map}` }
                alt={ `${name} location` }
              />
              <p><em>{ location }</em></p>
            </div>
          )) }
        </div>
      </section>
    </>
  );
}

export default PokemonData;
