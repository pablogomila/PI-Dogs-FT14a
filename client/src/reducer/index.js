const initialState = {
  allBreeds: [],
  searchedBreed: [],
  breedDetail: {},
  temperaments: [],
  filteredBreeds: [],
  loading: false,
}

const rootReducer = (state = initialState, action) => {
  if (action.type === 'GET_BREEDS') {
    return {
      ...state,
      loading: false,
      allBreeds: action.payload.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1,
      ),
    }
  }

  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: true,
    }
  }

  if (action.type === 'GET_BREED_DETAIL') {
    return {
      ...state,
      breedDetail: action.payload,
    }
  }

  if (action.type === 'GET_BREED') {
    return {
      ...state,
      searchedBreed: action.payload,
      allBreeds: action.payload,
      filteredBreeds: action.payload,
    }
  }

  if (action.type === 'GET_TEMPERAMENTS') {
    return {
      ...state,
      temperaments: action.payload,
    }
  }

  if (action.type === 'FILTER') {
    return {
      ...state,
      filteredBreeds: action.payload,
    }
  }

  if (action.type === 'ASC') {
    return {
      ...state,
      allBreeds: state.allBreeds
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
      searchedBreed: state.searchedBreed
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
      filteredBreeds: state.filteredBreeds
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
    }
  }

  if (action.type === 'DESC') {
    return {
      ...state,
      allBreeds: state.allBreeds
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
      searchedBreed: state.searchedBreed
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
      filteredBreeds: state.filteredBreeds
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
    }
  }

  state.allBreeds.forEach((b) => {
    if (typeof b.weight === 'string') {
      let range = b.weight.split('- ')
      let promedy = (parseInt(range[0]) + parseInt(range[1])) / 2
      b.weight = promedy
    }
  })

  if (action.type === 'MAXMIN') {
    return {
      ...state,
      allBreeds: state.allBreeds
        .filter((b) => b.weight !== null)
        .sort((a, b) => (a.weight > b.weight ? 1 : -1)),
      searchedBreed: state.searchedBreed
        .filter((b) => b.weight !== null)
        .sort((a, b) => (a.weight > b.weight ? 1 : -1)),
      filteredBreeds: state.filteredBreeds
        .filter((b) => b.weight !== null)
        .sort((a, b) => (a.weight > b.weight ? 1 : -1)),
    }
  }

  if (action.type === 'MINMAX') {
    return {
      ...state,
      allBreeds: state.allBreeds
        .filter((b) => b.weight !== null)
        .sort((a, b) => (a.weight < b.weight ? 1 : -1)),
      searchedBreed: state.searchedBreed
        .filter((b) => b.weight !== null)
        .sort((a, b) => (a.weight < b.weight ? 1 : -1)),
      filteredBreeds: state.filteredBreeds
        .filter((b) => b.weight !== null)
        .sort((a, b) => (a.weight < b.weight ? 1 : -1)),
    }
  }

  return state
}

export default rootReducer
