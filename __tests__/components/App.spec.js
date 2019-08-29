import React from 'react';
import { render } from 'react-native-testing-library';
import App from '../../App';

describe('App', () => {
    it('renders the correct title', () => {
        const { queryByText } = render(<App />);
        expect(queryByText('Magic 8 Ball')).not.toBeNull();
    });
});