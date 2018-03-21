import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers'

const middleware = [thunk]

const initializeStore = () => {
  const store = createStore(
    rootReducers,
    applyMiddleware(...middleware)
  )

  // store.asyncReducers = {}

  // store.injectReducer = (key, reducer) => {
  //   store.asyncReducers[key] = reducer;
  //   store.replaceReducer(createReducer(store.asyncReducers))
  //   return store
  // }
  return store
}

export default initializeStore