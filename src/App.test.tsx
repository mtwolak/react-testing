import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import NewsService, { DtoResponse } from "./NewsService";
import { act } from 'react-dom/test-utils';

jest.mock('./NewsService')

test('renders learn react link', async () => {
  //@ts-ignore
  NewsService.mockImplementation(() => {
    return {
      getData: (): DtoResponse[] => [
        {objectId: 1, title: 'Redux - easy'},
        {objectId: 2, title: 'Do not use Redux!'},
      ]
    }
  })

  // when
  await act(async () => {
    render(<App />)
  })

  // then
  expect(screen.getByText(/Redux - easy/i)).toBeInTheDocument()
  expect(screen.getByText(/Do not use Redux!/i)).toBeInTheDocument()
});
