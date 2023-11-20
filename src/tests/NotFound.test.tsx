import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

test('Verifica se a página possui um h2 com o texto "Page requested not found"', () => {
  renderWithRouter(<NotFound />);

  const PageNotFound = screen.getByRole('heading', { name: 'Page requested not found' });

  expect(PageNotFound).toBeInTheDocument();
});

test('Verifica se é exibida a imagem com o texto alternativo Clefairy pushing buttons....', () => {
  renderWithRouter(<NotFound />);

  const imageWithAlternativeText = screen.getByAltText("Clefairy pushing buttons randomly with text I have no idea what i'm doing");
  expect(imageWithAlternativeText).toBeInTheDocument();
  expect(imageWithAlternativeText).toHaveAttribute('src', '/404.gif');
});
