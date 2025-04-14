import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../home/Hero';

//Test suite
describe('Hero Component', () => {
  //Test case
  test('renders Hero component with correct text', () => {
    render(<Hero />);

    //Assertions
    const heroImage = screen.getByAltText('heroImage');
    // eslint-disable-next-line no-undef
    excpect(heroImage).toBeInTheDocument();
    // eslint-disable-next-line no-undef
    excpect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
  });
});