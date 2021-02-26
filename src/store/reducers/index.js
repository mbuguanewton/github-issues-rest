import { combineReducers } from 'redux'
import { GithubReducer } from './GithubReducer'

export const RootReducer = combineReducers({
  github: GithubReducer,
})
