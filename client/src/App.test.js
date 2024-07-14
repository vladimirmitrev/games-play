// import App from "./App";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GamesList from './components/games-list/GameList';
// import renderer from "react-test-renderer"

// import { jest } from 'jest';

test('Always true test', () => {
    expect(true).toBe.true;
}) 

test('Heading should be All Games', () => {
    render(<GamesList />);

    const headingElement = screen.getByText('All Games');

    expect(headingElement).toBeInTheDocument();
});