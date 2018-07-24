import { combineReducers } from 'redux'

import usersReducer from './users'
import preferencesReducer from './users'
import matchesReducer from './matches'

export default combineReducers({
  users: usersReducer,
  preferences: preferencesReducer,
  matches: matchesReducer
})