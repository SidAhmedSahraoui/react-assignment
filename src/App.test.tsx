import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './app';

describe('App', () => {
  it('should render', () => {
    render(<App />);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });
});
