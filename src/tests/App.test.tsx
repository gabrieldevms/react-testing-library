import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Verifica se são exibidos os links de navegação com os textos corretos', () => {
  renderWithRouter(<App />);

  const home = screen.getByText('Home');
  const about = screen.getByText('About');
  const favorite = screen.getByText('Favorite Pokémon');

  expect(home).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(favorite).toBeInTheDocument();
});

test('Verifica se link Home redireciona para a página correta', async () => {
  renderWithRouter(<App />);

  const home = screen.getByText('Home');
  await expect(home).toBeInTheDocument();
  userEvent.click(home);

  const homePage = screen.getByText('Encountered Pokémon');
  expect(homePage).toBeInTheDocument();
});

test('Verifica se o link About redirecionapara a página correta', async () => {
  renderWithRouter(<App />);

  const about = screen.getByText('About');
  expect(about).toBeInTheDocument();
  await userEvent.click(about);

  const aboutPage = screen.getByText('About Pokédex');
  expect(aboutPage).toBeInTheDocument();
});

test('Verifica se o link Pokémon Favorito redireciona para a página correta', async () => {
  renderWithRouter(<App />);

  const favorite = screen.getByText('Favorite Pokémon');
  expect(favorite).toBeInTheDocument();
  await userEvent.click(favorite);

  const favoritePage = screen.getByText('No favorite Pokémon found');
  expect(favoritePage).toBeInTheDocument();
});

test('Redireciona para a página Not Found ao entrar em uma URL desconhecida', async () => {
  renderWithRouter(<App />, { route: '/pagina-nao-existente' });

  const notFound = screen.getByText('Page requested not found');
  expect(notFound).toBeInTheDocument();
});
