import React from 'react'
import App from './components/App'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

const store = createStore(() => {}, {}, applyMiddleware())

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Provider store={store} ><App /></Provider>)