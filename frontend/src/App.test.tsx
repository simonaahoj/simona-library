import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import makeStore from './redux/store'
import { addBooks } from './redux/actions'

const store = makeStore()
test('renders all ISBN library', async () => {
  store.dispatch(
    addBooks([
      {
        _id: 'test',
        title: 'test',
        published: 'test',
        categories: [],
        pages: 'test',
        imgUrl: 'test',
        idAuthor: 'test',
        ISBN: 'test',
        description: 'test',
        copy: 'test',
      },
    ])
  )

  const {} = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const ISBNLirary = await screen.getByText('ISBN')
  expect(ISBNLirary).toBeInTheDocument()
})
