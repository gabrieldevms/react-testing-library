import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemon } from '../pages';
import App from '../App';

test('Verifica se é exibida a mensagem "No favorite pokemon found" caso não possua nenhum Pokémon favorito', () => {
  renderWithRouter(<FavoritePokemon />);

  const favoritePokemon = screen.getByText('Favorite Pokémon');
  const textNotFound = screen.getByText('No favorite Pokémon found');

  expect(favoritePokemon).toBeInTheDocument();
  expect(textNotFound).toBeInTheDocument();
});

test('Verifican se os Pokémons favoritos são exibidos na tela', async () => {
  renderWithRouter(<App />);

  const pokemonDetails = screen.getByText('More details');
  await userEvent.click(pokemonDetails);

  const pokemonCheckbox = screen.getByRole('checkbox');
  await userEvent.click(pokemonCheckbox);

  const favoritePokemon = screen.getByText('Favorite Pokémon');
  await userEvent.click(favoritePokemon);

  const pikachu = screen.getByText('Pikachu');
  expect(pikachu).toBeInTheDocument();
});
