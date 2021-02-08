global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Resty from './Resty';

describe('Resty crud routes', () => {
    it('gets', () => {
        render(<Resty />);

        const display = screen.getByTestId('display');
        const url = screen.getByLabelText('Url');
        const method = screen.getByLabelText('Get');
        const submitButton = screen.getByText('Submit');
        fireEvent.change(url, {
            target: {
                value: 'https://jsonplaceholder.typicode.com/posts'
            }
        });

        fireEvent.click(method)
        fireEvent.submit(submitButton);

        return waitFor(() => {
            expect(display).toHaveTextContent('"userId": 1, "id": 1,');
        });
    });
    it('posts', () => {
        render(<Resty />);

        const display = screen.getByTestId('display');
        const url = screen.getByLabelText('Url');
        const json = screen.getByLabelText('JSON');
        const method = screen.getByLabelText('Post');
        const submitButton = screen.getByText('Submit');
        fireEvent.change(url, {
            target: {
                value: 'https://jsonplaceholder.typicode.com/posts'
            }
        });
        fireEvent.change(json, {
            target: {
                value: '{}'
            }
        });

        fireEvent.click(method)

        fireEvent.submit(submitButton);

        return waitFor(() => {
            expect(display).toHaveTextContent('{ "id": 101 }');
        });
    });
    it('puts', () => {
        render(<Resty />);

        const display = screen.getByTestId('display');
        const url = screen.getByLabelText('Url');
        const json = screen.getByLabelText('JSON');
        const method = screen.getByLabelText('Put');
        const submitButton = screen.getByText('Submit');
        fireEvent.change(url, {
            target: {
                value: 'https://jsonplaceholder.typicode.com/posts/1'
            }
        });
        fireEvent.change(json, {
            target: {
                value: '{}'
            }
        });

        fireEvent.click(method)

        fireEvent.submit(submitButton);

        return waitFor(() => {
            expect(display).toHaveTextContent('{ "id": 1 }');
        });
    });
    it('deletes', () => {
        render(<Resty />);

        const display = screen.getByTestId('display');
        const url = screen.getByLabelText('Url');
        const method = screen.getByLabelText('Delete');
        const submitButton = screen.getByText('Submit');
        fireEvent.change(url, {
            target: {
                value: 'https://jsonplaceholder.typicode.com/posts/1'
            }
        });


        fireEvent.click(method)

        fireEvent.submit(submitButton);

        return waitFor(() => {
            expect(display).toHaveTextContent('');
        });
    });
});
