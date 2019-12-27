import React from 'react';
import { render, fireEvent} from 'react-native-testing-library';
import App from '../../App';
import * as response from '../../responses';
import { toBeEmpty, toHaveTextContent } from '@testing-library/jest-native';
expect.extend({ toBeEmpty, toHaveTextContent });

describe('App', () => {
    it('renders the correct title', () => {
        const { queryByText } = render(<App />);
        expect(queryByText('Maigc 8 Ball')).not.toBeNull();
    });

    it('renders the correct button title', () => {
        const { queryByText } = render(<App />);
        expect(queryByText('Click Me')).not.toBeNull();
    });

    it('response text is an empty string on start', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId('response-text')).toHaveTextContent(''); ``
    });

    it('get response is called once and return never ever', () => {
        response.getResponse = jest.fn().mockImplementationOnce(() => "Never Ever");
        const { getByTestId, getByText } = render(<App />);
        const responseButton = getByTestId('response-button')
        fireEvent.press(responseButton)
        expect(response.getResponse).toHaveBeenCalled()
        expect(getByText("Never Ever")).not.toBeNull()       
    });    
});