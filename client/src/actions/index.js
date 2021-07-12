import axios from 'axios'

export const GET_BREEDS = 'GET_BREEDS'
export const GET_BREED = 'GET_BREED'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const FILTER = 'FILTER'
export const SET_LOADING = 'SET_LOADING'

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

export function setLoading() {
  return {
    type: SET_LOADING,
  }
}

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

export function filter(payload) {
  return {
    type: FILTER,
    payload,
  }
}

export function sortBreeds(order) {
  return {
    type: order,
  }
}

export function orderByWeight(order) {
  return {
    type: order,
  }
}
