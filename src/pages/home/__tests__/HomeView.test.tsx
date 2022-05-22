import { render, screen } from '@testing-library/react';

import { HomeView } from '../HomeView';

describe('Home', () => {
    it('renders correctly', () => {
        render(<HomeView />);
        expect(screen.getByText('Home')).toBeInTheDocument();
    });
});
