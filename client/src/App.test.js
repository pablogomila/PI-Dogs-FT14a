import { render, screen } from '@testing-library/react'
import App from './App'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'

test('checking history', async () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>,
  )
})

