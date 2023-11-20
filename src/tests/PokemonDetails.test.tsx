import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const pokemonDetails = 'More details';
const pokemonId = 'pokemon-name';

test('Verifica se as informações detalhadas do Pokémon selecionado são mostradas na tela', async () => {
  renderWithRouter(<App />);

  const detailsComponent = screen.getByText(pokemonDetails);
  expect(detailsComponent).toBeInTheDocument();
  await userEvent.click(detailsComponent);

  const pokemonName = screen.getByTestId(pokemonId);
  const content = pokemonName.textContent;
  const detailsByName = screen.getByText(`${content} Details`);
  expect(detailsByName).toBeInTheDocument();
  expect(detailsComponent).not.toBeInTheDocument();

  const heading = screen.getByRole(
    'heading',
    { name: 'Summary' },
  );
  expect(heading).toBeInTheDocument();

  const headingDetails = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
  expect(headingDetails).toBeInTheDocument();
});

test('Verifica se existe uma seção de mapas contendo as localizações do Pokémon', async () => {
  renderWithRouter(<App />);

  const detailsComponent = screen.getByText(pokemonDetails);
  expect(detailsComponent).toBeInTheDocument();
  await userEvent.click(detailsComponent);

  const pokemonName = screen.getByTestId(pokemonId);
  const content = pokemonName.textContent;
  const pokemonLocations = screen.getByText(`Game Locations of ${content}`);
  expect(pokemonLocations).toBeInTheDocument();

  const locationsDetails = screen.getByText('Kanto Viridian Forest');
  expect(locationsDetails).toBeInTheDocument();

  const locationsDetails2 = screen.getByText('Kanto Power Plant');
  expect(locationsDetails2).toBeInTheDocument();

  const locationContent = screen.getAllByAltText(`${content} location`);
  expect(locationContent).toHaveLength(2);

  const pokemonImg = screen.getAllByRole('img');
  expect(pokemonImg[1]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
  expect(pokemonImg[2]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
});

test('Verifica se é possível favoritar um pokémon através da página de detalhes', async () => {
  renderWithRouter(<App />);

  const detailsComponent = screen.getByText(pokemonDetails);
  expect(detailsComponent).toBeInTheDocument();
  await userEvent.click(detailsComponent);

  const setFavorite = screen.getByRole('checkbox');
  expect(setFavorite).toBeInTheDocument();
  expect(setFavorite).not.toBeChecked();
  await userEvent.click(setFavorite);

  const favoritePokemon = screen.getByText('Pokémon favoritado?');
  expect(favoritePokemon).toBeInTheDocument();
  expect(setFavorite).toBeChecked();
  await userEvent.click(setFavorite);
});
