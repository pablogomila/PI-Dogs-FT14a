import axios from 'axios'

export const GET_BREEDS = 'GET_BREEDS'
export const GET_BREED = 'GET_BREED'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const FILTER = 'FILTER'
export const SET_LOADING = 'SET_LOADING'

//! Sends Action to get all breeds
export function getBreeds() {
  return function (dispatch) {
    return axios
      .get('/dogs/')
      .then((response) => response.data)
      .then((json) => {
        dispatch({ type: GET_BREEDS, payload: json })
      })
  }
}

//! Sends Action to set loading
export function setLoading() {
  return {
    type: SET_LOADING,
  }
}

//! Sends Action to get breed by query
export function getBreed(name) {
  return function (dispatch) {
    return axios
      .get(`/dogs?name=${name}`)
      .then((response) => response.data)
      .then((json) => {
        dispatch({ type: GET_BREED, payload: json })
      })
  }
}

//! Sends Action to get all temperaments
export function getTemperaments() {
  return function (dispatch) {
    return axios
      .get(`/temperaments`)
      .then((response) => response.data)
      .then((json) => {
        dispatch({ type: GET_TEMPERAMENTS, payload: json })
      })
  }
}

//! Sends Action to set filter
export function filter(payload) {
  return {
    type: FILTER,
    payload,
  }
}

//! Sends Action to set sorting
export function sortBreeds(order) {
  return {
    type: order,
  }
}

//! Sends Action to set order by weight
export function orderByWeight(order) {
  return {
    type: order,
  }
}
