import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import makeStore from './redux/store'

const store = makeStore()
test('renders all ISBN library', async () => {
  const {} = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const ISBNLirary = await screen.getByText('ISBN')
  expect(ISBNLirary).toBeInTheDocument()
})
