import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer'

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
