import { createStore, applyMiddleware } from 'redux'
import { RootReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middleware = [thunk]

let devtools

if (process.env.NODE_ENV === 'production') {
  devtools = applyMiddleware(...middleware)
} else {
  devtools = composeWithDevTools(applyMiddleware(...middleware, logger))
}

const initialState = {}

export const store = createStore(RootReducer, initialState, devtools)
