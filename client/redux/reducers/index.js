import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userData from './userData'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    userData
  })

export default createRootReducer
