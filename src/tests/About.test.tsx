import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About/About';

test('Verifica se a página contém as informações sobre a Pokédex', () => {
  renderWithRouter(<About />);

  const aboutPage = screen.getByText('What does this app do?');
  expect(aboutPage).toBeInTheDocument();
});

test('Verifica se a página contém um heading h2 com o texto About Pokédex', () => {
  renderWithRouter(<About />);

  const aboutPage = screen.getByRole('heading', { name: 'About Pokédex' });
  expect(aboutPage).toBeInTheDocument();
});

test('Verifica se a página contém dois parágrafos com texto sobre a Pokédex', () => {
  renderWithRouter(<About />);

  const paragraph1 = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon.');
  const paragraph2 = screen.getByText('One can filter Pokémon by type, and see more details for each one of them.');

  expect(paragraph1).toBeInTheDocument();
  expect(paragraph2).toBeInTheDocument();
});

test('Verifica se a página mostra a imagem de uma Pokédex', () => {
  renderWithRouter(<About />);

  const imagePokedex = screen.getByRole('img', { name: 'Pokédex' });
  expect(imagePokedex).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
