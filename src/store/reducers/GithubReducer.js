import * as types from '../types'

const initialState = {
  user: null,
  repos: [],
  issues: [],
  fetching: false,
  error: null,
}

export const GithubReducer = (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case types.FETCH_GITHUB_USER:
      return {
        ...state,
        fetching: false,
        user: payload,
      }
    case types.FETCH_REPOS:
      return {
        ...state,
        repos: payload,
      }
    case types.FETCH_ISSUES:
      return {
        ...state,
        issues: payload,
      }
    case types.FETCH_GITHUB_USER_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case types.FETCH_GITHUB_USER_FAIL:
      return {
        ...state,
        fetching: false,
        error: payload,
      }
    case types.FETCH_REPOS_FAIL:
    case types.FETCH_ISSUES_FAIL:
      return {
        ...state,
        error: payload,
      }

    case types.CREATE_ISSUE:
      return {
        ...state,
        issues: [payload, ...state.issues],
      }

    case types.CREATE_ISSUE_FAIL:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
