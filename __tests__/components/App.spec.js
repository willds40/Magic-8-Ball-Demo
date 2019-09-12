import React from 'react';
import { render } from 'react-native-testing-library';
import App from '../../App';
import * as response from '../../responses';
import { toBeEmpty, toHaveTextContent } from '@testing-library/jest-native';
expect.extend({ toBeEmpty, toHaveTextContent });

describe('App', () => {
    it('renders the correct title', () => {
        const { queryByText } = render(<App />);
        expect(queryByText('Maigc 8 Ball')).not.toBeNull();
    });
});