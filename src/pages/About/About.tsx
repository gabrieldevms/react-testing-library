import './about.css';

function About() {
  return (
    <section>
      <h2>{`About Pokédex`}</h2>
      <section className='about-container'>
        <img
          className="pokedex-image"
          src={`https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`}
          alt="Pokédex"
        />
        <div>
          <h3>What does this app do?</h3>
          <p>
            This application simulates a Pokédex, a
            digital encyclopedia containing all Pokémon.
          </p>
          <p>
            One can filter Pokémon by type, and see more details for each one of them.
          </p>
        </div>
      </section>
    </section>
  );
}

export default About;
