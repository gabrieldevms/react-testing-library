import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const cardDetails = 'More details';

test('Verifica se é renderizado o card com as informações do pokémon', async () => {
  renderWithRouter(<App />);

  const pokemonName = screen.getByTestId('pokemon-name');
  const pokemonType = screen.getByTestId('pokemon-type');
  const average = screen.getByText('Average weight: 6.0 kg');
  const pokemonImage = screen.getByRole('img', { name: 'Pikachu sprite' });

  expect(pokemonName).toHaveTextContent('Pikachu');
  expect(pokemonType).toHaveTextContent('Electric');
  expect(average).toBeInTheDocument();
  expect(pokemonImage).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
});

test('Verifica se o card do Pokémon indicado contém um link de navegação', async () => {
  renderWithRouter(<App />);

  const cardLink = screen.getByRole('link', { name: cardDetails });
  expect(cardLink).toBeInTheDocument();
  expect(cardLink).toHaveAttribute('href', '/pokemon/25');
});

test('Verifica se ao clicar no link de navegação do Pokémon, o usuário é redirecionado para a página de detalhes', async () => {
  renderWithRouter(<App />);

  const cardLink = screen.getByRole('link', { name: cardDetails });
  await userEvent.click(cardLink);

  const { pathname } = window.location;
  expect(pathname).toBe('/pokemon/25');
});

test('Verifica se existe um ícone de estrela nos Pokémon favoritados', async () => {
  renderWithRouter(<App />);

  const pokemonLink = screen.getByRole('link', { name: cardDetails });
  await userEvent.click(pokemonLink);
  const pokemonDetails = screen.getByText('Pikachu Details');
  expect(pokemonDetails).toBeInTheDocument();

  const checkBox = screen.getByLabelText('Pokémon favoritado?');
  expect(checkBox).toBeInTheDocument();

  await userEvent.click(checkBox);
  const favorite = screen.getByAltText('Pikachu is marked as favorite');
  expect(favorite).toBeInTheDocument();
});
