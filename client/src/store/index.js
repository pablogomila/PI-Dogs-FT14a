import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer'

//! Simple Store implementation using own Reducer

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
