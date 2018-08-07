import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import common from './common'
import user from './user'
import axios from '../utils/axios'

const rootReducer = combineReducers({
  user,
  common
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const fetch = (apiClient) => {
  return ({dispatch, getState}) => {
    return (next) => {
      return (action) => {
        if (typeof action === 'function') {
          return action(dispatch, getState)
        }
  
        const { promise, types, ...rest } = action
        if (!promise) {
          return next(action)
        }
  
        const [REQUEST, SUCCESS, FAILURE] = types
        next({...rest, type: REQUEST})
        const actionPromise = promise(apiClient)
        actionPromise.then(response => {
          next({...rest, payload: response.payload, type: SUCCESS})
        }).catch(error => {
          next({...rest, error, type: FAILURE})
        })
        return actionPromise
      }
    }
  }
}

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, fetch(axios))
  )
)

export default store