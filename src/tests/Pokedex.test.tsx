import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const testPokemonId = 'pokemon-name';

test('Verifica se a página contém um heading h2 com o texto Encountered Pokémon', async () => {
  renderWithRouter(<App />);

  const EncouteredText = screen.getByText('Encountered Pokémon');
  expect(EncouteredText).toBeInTheDocument();
});

test('Verifica se é exibido o próximo Pokémon da lista quando o botão Próximo pokémon é clicado', async () => {
  const pikachu = 'Pikachu';

  renderWithRouter(<App />);

  const pokemonName = screen.getByTestId(testPokemonId);
  const nextPokemonButton = screen.getByTestId('next-pokemon');
  expect(nextPokemonButton).toBeInTheDocument();

  await userEvent.click(nextPokemonButton);
  expect(pokemonName).toHaveTextContent('Charmander');
  expect(pokemonName).not.toHaveTextContent(pikachu);

  await userEvent.click(nextPokemonButton);
  await userEvent.click(nextPokemonButton);
  expect(pokemonName).toHaveTextContent('Ekans');

  await userEvent.click(nextPokemonButton);
  await userEvent.click(nextPokemonButton);
  expect(pokemonName).toHaveTextContent('Mew');

  await userEvent.click(nextPokemonButton);
  await userEvent.click(nextPokemonButton);
  await userEvent.click(nextPokemonButton);
  expect(pokemonName).toHaveTextContent('Dragonair');

  await userEvent.click(nextPokemonButton);
  expect(pokemonName).toHaveTextContent('Pikachu');
});

test('Verifica se a pokédex tem os botões de filtro e se após a seleção, aparece pokémon do tipo', async () => {
  renderWithRouter(<App />);

  const pokemonName = screen.getByTestId(testPokemonId);
  const nextBtn = screen.getAllByTestId('pokemon-type-button');

  expect(nextBtn).toHaveLength(7);
  expect(nextBtn[0]).toHaveTextContent('Electric');
  expect(nextBtn[1]).toHaveTextContent('Fire');
  expect(nextBtn[2]).toHaveTextContent('Bug');
  expect(nextBtn[3]).toHaveTextContent('Poison');
  expect(nextBtn[4]).toHaveTextContent('Psychic');
  expect(nextBtn[6]).toHaveTextContent('Dragon');
  expect(nextBtn[5]).toHaveTextContent('Normal');

  await userEvent.click(nextBtn[2]);
  expect(pokemonName).toHaveTextContent('Caterpie');

  await userEvent.click(nextBtn[3]);
  expect(pokemonName).toHaveTextContent('Ekans');
});

test('Verifica se a Pokédex contém um botão para resetar o filtro', async () => {
  renderWithRouter(<App />);

  const btnAll = screen.getByText('All');
  const pokemonName = screen.getByTestId(testPokemonId);
  const nextButton = screen.getByTestId('next-pokemon');
  const buttons = screen.getAllByTestId('pokemon-type-button');

  await userEvent.click(buttons[2]);
  expect(pokemonName).toHaveTextContent('Caterpie');
  expect(btnAll).toBeInTheDocument();

  await userEvent.click(btnAll);
  expect(pokemonName).toHaveTextContent('Pikachu');

  await userEvent.click(nextButton);
  await userEvent.click(nextButton);
  await userEvent.click(nextButton);
  await userEvent.click(nextButton);
  await userEvent.click(nextButton);
  await userEvent.click(nextButton);
  await userEvent.click(nextButton);
  await userEvent.click(nextButton);
  expect(pokemonName).toHaveTextContent('Dragonair');
  expect(btnAll).toHaveTextContent('All');
});
