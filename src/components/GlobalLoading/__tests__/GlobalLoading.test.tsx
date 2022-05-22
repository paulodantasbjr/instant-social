import { render, screen } from '@testing-library/react';

import { GlobalLoading } from '../GlobalLoading';

describe('GlobalLoading', () => {
    it('should render correctly', () => {
        render(<GlobalLoading />);
        expect(screen.getByText('Loadind...')).toBeInTheDocument();
    });
});
