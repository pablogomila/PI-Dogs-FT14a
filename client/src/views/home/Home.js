import React, { useState, useEffect } from 'react'
import { getBreeds, setLoading } from './../../actions/index'
import Card from './../../components/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import style from './home.module.css'
import FilterSort from './../../components/filtersort/FilterSort'

function Home({ input, setInput }) {
  const dispatch = useDispatch()
  const breeds = useSelector((state) => state.allBreeds)
  const loading = useSelector((state) => state.loading)
  const filteredBreeds = useSelector((state) => state.filteredBreeds)

  useEffect(() => {
    dispatch(setLoading())
    dispatch(getBreeds())
    // eslint-disable-next-line
  }, [])

  const [pageNumber, setPageNumber] = useState(0)
  const [breedsPerPage] = useState(8)
  const pagesVisited = pageNumber * breedsPerPage

  function displayBreeds(array) {
    if (array.message) {
      return (
        <div className={style.notFoundMsg}>
          <p className={style.notFoundMsg}>Dog not found</p>
          <button
            className={style.button}
            onClick={() => (window.location.href = '/home')}
          >
            Home
          </button>
        </div>
      )
    }

    let breedsToDisplay = array
      ?.filter((b) => b.name.toLowerCase().includes(input.toLowerCase()))
      .slice(pagesVisited, pagesVisited + breedsPerPage)

    return breedsToDisplay.length ? (
      breedsToDisplay.map((breed) => {
        return <Card id={breed.id} name={breed.name} img={breed.image} />
      })
    ) : (
      <div className={style.notFoundMsg}>
        <p className={style.notFoundMsg}>No Dog Found</p>
        <button
          className={style.button}
          onClick={() => (window.location.href = '/home')}
        >
          Home
        </button>
      </div>
    )
  }

  return (
    <div className={style.mainContainer}>
      <FilterSort />
      <div>
        <div className={style.container}>
          {loading ? (
            <i className="fas fa-spinner fa-spin spinner"></i>
          ) : filteredBreeds.length > 0 ? (
            displayBreeds(filteredBreeds)
          ) : (
            displayBreeds(breeds)
          )}
        </div>
        <div className={style.paginateContainer}>
          {pageNumber === 0 ? null : (
            <button
              onClick={() => {
                setPageNumber(pageNumber - 1)
              }}
              className={style.buttonpage}
            >
              Previous
            </button>
          )}
          {pageNumber === 0 ? null : (
            <button
              onClick={() => setPageNumber(0)}
              className={style.buttonpage}
            >
              Home
            </button>
          )}
          <button
            onClick={() => setPageNumber(pageNumber + 1)}
            className={style.buttonpage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
