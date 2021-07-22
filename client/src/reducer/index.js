const initialState = {
  allBreeds: [],
  searchedBreed: [],
  breedDetail: {},
  temperaments: [],
  filteredBreeds: [],
  loading: false,
}

//! Reducer to get breeds ordered by alphabet
const rootReducer = (state = initialState, action) => {
  if (action.type === 'GET_BREEDS') {
    return {
      ...state,
      loading: true,
      allBreeds: action.payload.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1,
      ),
      // eslint-disable-next-line
      loading: false,
    }
  }

  //! Reducer to set loading state
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: true,
    }
  }

  //! Reducer to get breed details from DB
  if (action.type === 'GET_BREED_DETAIL') {
    return {
      ...state,
      loading: true,
      breedDetail: action.payload,
      // eslint-disable-next-line
      loading: false,
    }
  }

  //! Reducer to get breeds ordered by alphabet
  if (action.type === 'GET_BREED') {
    return {
      ...state,
      loading: true,
      searchedBreed: action.payload,
      allBreeds: action.payload,
      filteredBreeds: action.payload,
      // eslint-disable-next-line
      loading: false,
    }
  }

  //! Reducer to get temperaments
  if (action.type === 'GET_TEMPERAMENTS') {
    return {
      ...state,
      loading: true,
      temperaments: action.payload,
      // eslint-disable-next-line
      loading: false,
    }
  }

  //! Reducer to get filtered breeds
  if (action.type === 'FILTER') {
    return {
      ...state,
      loading: true,
      filteredBreeds: action.payload,
      // eslint-disable-next-line
      loading: false,
    }
  }

  //! Reducer to get breeds ordered by alphabet from A-Z
  if (action.type === 'AZ') {
    return {
      ...state,
      loading: true,
      allBreeds: state.allBreeds
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
      searchedBreed: state.searchedBreed
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
      filteredBreeds: state.filteredBreeds
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
      // eslint-disable-next-line
      loading: false,
    }
  }

  //! Reducer to get breeds ordered by alphabet from Z-A
  if (action.type === 'ZA') {
    return {
      ...state,
      loading: true,
      allBreeds: state.allBreeds
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
      searchedBreed: state.searchedBreed
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
      filteredBreeds: state.filteredBreeds
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
      // eslint-disable-next-line
      loading: false,
    }
  }

  //! Promedy weight range to get a number and be able to order
  state.allBreeds.forEach((b) => {
    if (typeof b.weight === 'string') {
      let range = b.weight.split('- ')
      let promedy = (parseInt(range[0]) + parseInt(range[1])) / 2
      b.weight = promedy
    }
    // if (typeof b.weight === 'number') {
    //   let promedy = (b.weight[0])
    //   b.weight = promedy
    // }
  })

  //! Reducer to get breeds ordered by weight promedy Light to Heavy
  if (action.type === 'LH') {
    return {
      ...state,
      loading: true,
      allBreeds: state.allBreeds
        .filter((b) => b.weight !== null)
        .sort((a, b) => (a.weight > b.weight ? 1 : -1)),
      searchedBreed: state.searchedBreed
        .filter((b) => b.weight !== null)
        .sort((a, b) => (a.weight > b.weight ? 1 : -1)),
      filteredBreeds: state.filteredBreeds
        .filter((b) => b.weight !== null)
        .sort((a, b) => (a.weight > b.weight ? 1 : -1)),
      // eslint-disable-next-line
      loading: false,
    }
  }

  //! Reducer to get breeds ordered by weight promedy Heavy to Light
  if (action.type === 'HL') {
    return {
      ...state,
      loading: true,
      allBreeds: state.allBreeds
        .filter((b) => b.weight !== null)
        .sort((a, b) => (a.weight < b.weight ? 1 : -1)),
      searchedBreed: state.searchedBreed
        .filter((b) => b.weight !== null)
        .sort((a, b) => (a.weight < b.weight ? 1 : -1)),
      filteredBreeds: state.filteredBreeds
        .filter((b) => b.weight !== null)
        .sort((a, b) => (a.weight < b.weight ? 1 : -1)),
      // eslint-disable-next-line
      loading: false,
    }
  }

  return state
}

export default rootReducer
