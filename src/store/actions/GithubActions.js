import * as types from '../types'
import axios from 'axios'

const config = {
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
}

const baseURL = 'https://api.github.com/users'

export function fetchUser(username) {
  return async (dispatch) => {
    try {
      dispatch({
        type: types.FETCH_GITHUB_USER_REQUEST,
      })

      const { data } = await axios.get(`${baseURL}/${username}`, config)

      dispatch({
        type: types.FETCH_GITHUB_USER,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: types.FETCH_GITHUB_USER_FAIL,
        payload: 'User not found!!',
      })
    }
  }
}

export function fetchRepos(url) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(url, config)

      dispatch({
        type: types.FETCH_REPOS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: types.FETCH_REPOS_FAIL,
        payload: error.message,
      })
    }
  }
}

export function fetchIssues(url) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(url, config)

      dispatch({
        type: types.FETCH_ISSUES,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: types.FETCH_REPOS_FAIL,
        payload: error.message,
      })
    }
  }
}

export function createIssue(url, issue) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(url, issue, config)

      dispatch({
        type: types.CREATE_ISSUE,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: types.CREATE_ISSUE_FAIL,
        payload: error.message,
      })
    }
  }
}
